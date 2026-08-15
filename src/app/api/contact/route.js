import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

const MAX_FILE_BYTES = 5 * 1024 * 1024;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function asTrimmedString(value) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !contactEmail || !fromEmail) {
      console.error(
        "Contact API misconfigured: RESEND_API_KEY, CONTACT_EMAIL, and RESEND_FROM_EMAIL are required.",
      );
      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured. Please try again later.",
        },
        { status: 500 },
      );
    }

    const formData = await req.formData();
    const firstName = asTrimmedString(formData.get("firstName"));
    const lastName = asTrimmedString(formData.get("lastName"));
    const email = asTrimmedString(formData.get("email"));
    const message = asTrimmedString(formData.get("message"));
    const file = formData.get("file");

    const fieldErrors = {};
    if (!firstName) fieldErrors.firstName = "First name is required";
    if (!lastName) fieldErrors.lastName = "Last name is required";
    if (!email) {
      fieldErrors.email = "Email is required";
    } else if (!EMAIL_RE.test(email)) {
      fieldErrors.email = "Email is invalid";
    }
    if (!message) {
      fieldErrors.message = "Message is required";
    } else if (message.length > MAX_MESSAGE_LENGTH) {
      fieldErrors.message = "Message is too long";
    }

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        { success: false, error: "Please fix the highlighted fields.", fieldErrors },
        { status: 400 },
      );
    }

    const attachments = [];
    if (file && typeof file === "object" && typeof file.arrayBuffer === "function") {
      if (file.size > MAX_FILE_BYTES) {
        return NextResponse.json(
          { success: false, error: "Attachment must be 5MB or smaller." },
          { status: 400 },
        );
      }
      if (file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name || "attachment",
          content: buffer,
        });
      }
    }

    const safeFirst = escapeHtml(firstName);
    const safeLast = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const hasFile = attachments.length > 0;
    const safeFileName = hasFile ? escapeHtml(file.name || "attachment") : "";
    const fileSizeMb = hasFile ? (file.size / 1024 / 1024).toFixed(2) : "";

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      replyTo: email,
      subject: `Portfolio Message from ${firstName} ${lastName}`,
      attachments,
      html: `
        <div style="background-color: #fafafa; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: #111827; min-height: 100%;">
          <div style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <div style="padding: 30px 40px 20px 40px; border-bottom: 1px solid #f3f4f6;">
              <h2 style="font-size: 18px; font-weight: 600; color: #111827; margin: 0;">
                New Contact Form Submission
              </h2>
            </div>
            <div style="padding: 30px 40px 40px 40px;">
              <p style="margin-top: 0; margin-bottom: 24px; font-size: 14px; color: #4b5563; line-height: 1.5;">
                You have received a new message through the contact form on your portfolio website. Details are provided below:
              </p>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 14px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 500; width: 25%;">Name</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 600;">${safeFirst} ${safeLast}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 500;">Email</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 600;">
                    <a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: underline;">${safeEmail}</a>
                  </td>
                </tr>
                ${
                  hasFile
                    ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 500;">Attachment</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 600;">
                    <span style="background-color: #f3f4f6; padding: 4px 8px; border-radius: 4px; border: 1px solid #e5e7eb; font-size: 12px; display: inline-block;">${safeFileName} (${fileSizeMb} MB)</span>
                  </td>
                </tr>
                `
                    : ""
                }
              </table>
              <div style="margin-bottom: 10px;">
                <h3 style="font-size: 13px; font-weight: 600; color: #4b5563; text-transform: uppercase; margin-bottom: 10px; margin-top: 0; letter-spacing: 0.5px;">Message</h3>
                <div style="background-color: #f9fafb; border-left: 4px solid #9ca3af; padding: 18px; border-radius: 6px; font-size: 14px; color: #1f2937; line-height: 1.6;">
                  ${safeMessage}
                </div>
              </div>
            </div>
            <div style="background-color: #f9fafb; padding: 20px 40px; border-top: 1px solid #f3f4f6; text-align: center; font-size: 12px; color: #9ca3af;">
              <p style="margin: 0;">Sent via the portfolio website contact system.</p>
              <p style="margin: 4px 0 0 0;">&copy; ${new Date().getFullYear()} ${escapeHtml(site.name)}. All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        {
          success: false,
          error: "Unable to send your message right now. Please try again later.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while sending your message.",
      },
      { status: 500 },
    );
  }
}
