import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import ThemedBackground from "@/components/three/ThemedBackground";
import ScrollFX from "@/components/scroll/ScrollFX";
import Navbar from "@/components/layout/Navbar";
import { BackgroundThemeProvider } from "@/context/BackgroundThemeContext";
import { JsonLd, personSchema } from "@/components/ui/json-ld";

export const metadata = {
  title: "Rudraksh Bansal | 3rd Year CSE Student — Web & Software Development",
  description:
    "3rd year Computer Science student from Pinjore, Haryana, interested in web development and software development. Open to internships, projects, and learning opportunities.",
  keywords: [
    "Rudraksh Bansal",
    "CSE Student",
    "Web Development",
    "Software Development",
    "React",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "MongoDB",
    "SQL",
    "Linux",
    "Pinjore",
  ],
  openGraph: {
    title: "Rudraksh Bansal | 3rd Year CSE Student",
    description:
      "3rd year Computer Science student interested in web development and software development. Open to internships, projects, and learning opportunities.",
    type: "website",
    images: ["/rudraksh.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudraksh Bansal | 3rd Year CSE Student",
    description:
      "CSE student focused on web development and software development. Open to internships and learning opportunities.",
    images: ["/rudraksh.jpg"],
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="dark overflow-x-hidden"
      data-bg-theme="ember"
      suppressHydrationWarning
    >
      <body
        className={`grain relative overflow-x-hidden bg-background text-foreground ${spaceGrotesk.className}`}
        cz-shortcut-listen="true"
        style={{ cursor: "url('/cursor.png')" }}
      >
        <BackgroundThemeProvider>
          <JsonLd data={personSchema} />
          <ThemedBackground />
          <ScrollFX />
          <Navbar />
          <div className="relative z-10">{children}</div>
        </BackgroundThemeProvider>
      </body>
    </html>
  );
}
