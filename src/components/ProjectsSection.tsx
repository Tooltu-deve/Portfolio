"use client";

interface Project {
  title: string;
  blurb: string;
  desc: string;
  tags: string[];
  status: "Live" | "WIP" | "Completed";
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    blurb: "Portfolio Website built with Next.js, Tailwind CSS, and TypeScript",
    desc: "Portfolio Website built with Next.js, Tailwind CSS, and TypeScript. Deployed on AWS S3 and CloudFront. CI/CD on GitHub Actions with automated tests and deployments.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "AWS S3", "AWS CloudFront"],
    status: "Live",
    github: "https://github.com/Tooltu-deve/Portfolio"
  },
  {
    title: "Application on EKS Kubernetes Cluster",
    blurb: "Application on EKS Kubernetes Cluster",
    desc: "Application on EKS Kubernetes Cluster. CI/CD on GitHub Actions with automated tests.",
    tags: ["AWS EKS", "Kubernetes", "Docker", "GitHub Actions"],
    status: "Completed",
    github: "https://github.com/Tooltu-deve/Deploy-with-eks",
  },
  {
    title: "Blog-post Website using ECS Fargate",
    blurb: "Blog-post Website using ECS Fargate with Docker and GitHub Actions",
    desc: "Deployed a blog-post website using blue/green deployment strategy on ECS Fargate. CI/CD on GitHub Actions with automated tests and deployments. Used Terraform to deploy the infrastructure.",
    tags: ["AWS ECS", "Fargate", "Docker", "GitHub Actions", "Terraform", "Blue/Green Deployment", "Secrets Manager"],
    status: "Completed",
    github: "https://github.com/Tooltu-deve/Blog-post",
  },
  // {
  //   title: "IAM Security Audit Tool",
  //   blurb: "Automated AWS IAM policy analyzer",
  //   desc: "CLI scanning AWS IAM policies for misconfigurations and overly permissive rules. Generates HTML/JSON reports with risk scores.",
  //   tags: ["AWS IAM", "Python", "Boto3", "Security"],
  //   status: "Completed",
  //   github: "https://github.com/Tooltu-deve",
  // },
];

function ChevronRight() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const statusColor: Record<Project["status"], string> = {
    Live: "text-neon",
    Completed: "text-cream/80",
    WIP: "text-[#e8a55a]",
  };

  return (
    <article className="liquid-glass rounded-[32px] p-6 sm:p-8 hover:bg-white/10 transition-colors flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <span
          className={`font-mono uppercase tracking-[1.5px] text-[11px] sm:text-[12px] ${statusColor[project.status]}`}
        >
          {project.status}
        </span>
        <a
          href={project.demo ?? project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open project"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform"
          style={{
            background: "linear-gradient(to bottom right, #b724ff, #7c3aed)",
          }}
        >
          <ChevronRight />
        </a>
      </div>

      <h3 className="font-grotesk uppercase text-cream text-[26px] sm:text-[30px] md:text-[34px] leading-[1.1]">
        {project.title}
      </h3>
      <p className="font-mono uppercase text-cream/70 text-[11px] sm:text-[12px] tracking-[1px] mt-2">
        {project.blurb}
      </p>

      <p className="font-mono text-cream/85 text-[13px] sm:text-[14px] leading-[1.6] mt-6">
        {project.desc}
      </p>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/10">
          {project.tags.map((t) => (
            <span
              key={t}
              className="font-mono uppercase text-cream/80 text-[10px] sm:text-[11px] tracking-[1px] px-3 py-1 rounded-full border border-white/15"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-5 font-grotesk uppercase text-[12px] tracking-[1px]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/80 hover:text-neon transition-colors"
          >
            → Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/80 hover:text-neon transition-colors"
            >
              → Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full bg-[#010828] py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-[1831px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-12 sm:mb-16">
          <h2 className="font-grotesk uppercase text-cream text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] leading-[1.05]">
            Work
            <br />
            <span className="ml-12 sm:ml-16 md:ml-24 lg:ml-32">
              <span
                className="font-condiment text-neon normal-case mr-2 sm:mr-3"
                style={{ mixBlendMode: "exclusion" }}
              >
                shipped
              </span>{" "}
              <span className="font-grotesk">& in flight</span>
            </span>
          </h2>

          <a
            href="https://github.com/Tooltu-deve"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-end shrink-0 group"
          >
            <span className="flex items-end gap-2">
              <span className="font-grotesk uppercase text-cream text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-none group-hover:text-neon transition-colors">
                SEE
              </span>
              <span className="flex flex-col">
                <span className="font-grotesk uppercase text-cream text-[20px] sm:text-[26px] md:text-[32px] lg:text-[36px] leading-[1] group-hover:text-neon transition-colors">
                  ALL
                </span>
                <span className="font-grotesk uppercase text-cream text-[20px] sm:text-[26px] md:text-[32px] lg:text-[36px] leading-[1] group-hover:text-neon transition-colors">
                  PROJECTS
                </span>
              </span>
            </span>
            <div className="bg-neon w-full h-[6px] sm:h-[8px] lg:h-[10px] mt-2" />
          </a>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
