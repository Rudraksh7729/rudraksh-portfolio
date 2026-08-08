export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rudraksh Bansal",
  jobTitle: "3rd Year CSE Student",
  description:
    "3rd year Computer Science student interested in web development and software development.",
  sameAs: [
    "https://github.com/Rudraksh7729",
    "https://www.linkedin.com/in/rudrakshbansal-",
  ],
  knowsAbout: [
    "Web Development",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "C",
    "C++",
    "Linux",
    "SQL",
    "MongoDB",
  ],
};

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
