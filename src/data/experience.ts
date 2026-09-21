export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description?: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Neko Industry Management Company",
    role: "Frontend Developer",
    period: "2020 – Present",
    highlights: [
      "Develop and maintain web applications.",
      "Build user interfaces and implement new features.",
      "Collaborate on technical analysis, development, and troubleshooting.",
      "Participate in technical meetings, planning, and knowledge sharing.",
    ],
  },
  {
    company: "Risloo",
    role: "Backend / Database Developer",
    period: "2023 – 2024",
    highlights: [
      "Develop backend services using Node.js.",
      "Design and develop APIs.",
      "Work with databases and implement data access logic.",
      "Collaborate on the development and maintenance of software services.",
    ],
  },
  {
    company: "Orchid Pharmed / Bornafit Dr. Kaviani",
    role: "Frontend Developer",
    period: "2019 – 2020",
    highlights: [
      "Develop user interfaces using Vue.js and Nuxt.js.",
      "Implement product pages and features.",
      "Collaborate in frontend development and improvement.",
    ],
  },
  {
    company: "Majazeh Company",
    role: "Web Designer / JavaScript Developer",
    period: "2018 – 2019",
    highlights: [
      "Design and develop web pages.",
      "Implement interactive features using JavaScript.",
      "Develop and improve user interfaces.",
    ],
  },
  {
    company: "Ermile Company",
    role: "Web Development / IT Training",
    period: "2016 – 2018",
    highlights: [
      "Provide practical training in HTML, CSS, JavaScript, Photoshop, and ICDL.",
      "Gain practical experience in web development.",
    ],
  },
];
