import { Download, ExternalLink, FileText, Github } from "lucide-react";
import { motion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

const resumeUrl = "/resume/Mahdi-Mousavi-Resume.pdf";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Vite", "TypeScript", "JavaScript", "Tailwind CSS", "Mantine", "AG Grid"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Express.js", "FastAPI", "REST APIs", "Socket.IO"],
  },
  {
    title: "Data & Architecture",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Prisma", "TypeORM", "SQLAlchemy", "Repository Pattern", "Modular Architecture", "SOLID"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Docker Compose", "Linux", "Nginx", "IIS", "GitHub Actions", "Git", "GitHub", "Playwright", "Postman", "Swagger / OpenAPI"],
  },
  {
    title: "AI / LLM",
    skills: ["LLM APIs", "RAG", "Embeddings", "Vector Search", "AI Integration", "AI-assisted Development"],
  },
];

export default function Resume() {
  const selectedProjects = projects.filter((project) =>
    ["neco", "pomodoro", "ketabdaneh", "ai-chat"].includes(project.slug),
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

      <main className="relative mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-white/10 pb-10"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Resume
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Mahdi Mousavi
              </h1>
              <p className="mt-3 text-xl text-zinc-300">
                Senior Frontend / Full-Stack Developer
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
                12 years of experience building web applications across frontend,
                backend, databases, architecture, and deployment, with a strong
                focus on React, TypeScript, enterprise UI engineering, and AI
                integrations.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-500">
                <span>Qom, Iran</span>
                <a className="hover:text-white" href="mailto:MahdiMousavi40@gmail.com">
                  MahdiMousavi40@gmail.com
                </a>
                <a className="hover:text-white" href="https://github.com/mistrs2p" target="_blank" rel="noreferrer">
                  github.com/mistrs2p
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ className: "rounded-xl bg-white text-black hover:bg-zinc-200" })}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View PDF
              </a>
              <a
                href={resumeUrl}
                download
                className={buttonVariants({
                  variant: "outline",
                  className: "rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10",
                })}
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </a>
            </div>
          </div>
        </motion.header>

        <div className="grid gap-16 py-12">
          <section>
            <SectionTitle>Professional Experience</SectionTitle>
            <div className="mt-7 space-y-8">
              {experiences.map((experience) => (
                <article key={experience.company} className="border-l border-white/10 pl-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white">{experience.role}</h3>
                      <p className="text-sm text-blue-400">{experience.company}</p>
                    </div>
                    <span className="text-sm text-zinc-600">{experience.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-500">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="relative pl-4 before:absolute before:left-0 before:top-3 before:h-1 before:w-1 before:rounded-full before:bg-zinc-600">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <h3 className="text-sm font-medium text-white">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-zinc-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Selected Projects</SectionTitle>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {selectedProjects.map((project) => (
                <article key={project.slug} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-blue-400">{project.category}</p>
                      <h3 className="mt-2 text-lg font-medium text-white">{project.title}</h3>
                    </div>
                    <FileText className="h-4 w-4 shrink-0 text-zinc-600" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">{project.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((technology) => (
                      <span key={technology} className="rounded-md bg-white/5 px-2 py-1 text-xs text-zinc-500">
                        {technology}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/projects/${project.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm text-white hover:text-blue-400"
                  >
                    View case study →
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-5 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Education</SectionTitle>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <Education degree="MSc" title="Engineering Management" institution="Islamic Azad University, Central Tehran" />
              <Education degree="BSc" title="Industrial Engineering" institution="Qom University of Technology" />
            </div>
          </section>

          <section>
            <SectionTitle>Languages</SectionTitle>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-zinc-400">
                English — Professional
              </span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-2xl font-semibold tracking-tight text-white">{children}</h2>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

function Education({
  degree,
  title,
  institution,
}: {
  degree: string;
  title: string;
  institution: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-blue-400">{degree}</p>
      <h3 className="mt-2 text-lg font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-500">{institution}</p>
    </div>
  );
}
