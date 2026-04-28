"use client";

interface Item {
  period: string;
  title: string;
  org: string;
  desc: string;
  tags?: string[];
  logo?: string;
  logoAlt?: string;
}

const items: Item[] = [
  {
    period: "2024 — Present",
    title: "Pursuing a Bachelor's Degree in Information Technology",
    org: "Vietnam National University, Ho Chi Minh City, University of Science",
    desc: "Coursework in fundamental computer science concepts (DSA / OOP / Computational Thinking), networks and databases. Built AI-Powered Projects throughout the curriculum.",
    tags: ["DSA", "OOP", "Computational Thinking", "Networks", "Databases"],
    logo: "/logo.png",
    logoAlt: "HCMUS logo",
  },
  {
    period: "2025 - Present",
    title: "Self-directed Cloud & DevOps track",
    org: "AWS · DevOps · Backend",
    desc: "Building real projects on AWS — Lambda, API Gateway, EKS, Terraform — and deploying them through CI/CD pipelines on GitHub Actions. Hands-on practice with VPC design, IAM, RDS/DynamoDB, S3, and well-architected reviews.",
    tags: ["AWS", "Terraform", "GitHub Actions", "Docker", "DevOps"],
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative w-full bg-[#010828] py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-[1831px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-12 sm:mb-16">
          <h2 className="font-grotesk uppercase text-cream text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] leading-[1.05]">
            Roads
            <br />
            <span className="ml-12 sm:ml-16 md:ml-24 lg:ml-32">
              <span
                className="font-condiment text-neon normal-case mr-2 sm:mr-3"
                style={{ mixBlendMode: "exclusion" }}
              >
                traveled
              </span>{" "}
              <span className="font-grotesk">so far</span>
            </span>
          </h2>

          <p className="font-mono uppercase text-cream/80 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.6] max-w-[320px]">
            School and the long self-taught detours in between.
          </p>
        </div>

        {/* Timeline cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item) => (
            <article
              key={item.title}
              className="liquid-glass rounded-[28px] p-6 sm:p-8 hover:bg-white/10 transition-colors flex flex-col h-full relative"
            >
              {item.logo && (
                <img
                  src={item.logo}
                  alt={item.logoAlt ?? `${item.org} logo`}
                  className="absolute top-6 right-6 sm:top-8 sm:right-8 w-[4.5rem] h-[4.5rem] sm:w-[5.25rem] sm:h-[5.25rem] object-contain rounded-md bg-white/90 p-1 shrink-0"
                  loading="lazy"
                />
              )}
              <span className="font-mono uppercase text-neon text-[11px] sm:text-[12px] tracking-[1.5px]">
                {item.period}
              </span>
              <h3 className="font-grotesk uppercase text-cream text-[22px] sm:text-[24px] md:text-[26px] leading-[1.15] mt-3 pr-24 sm:pr-28">
                {item.title}
              </h3>
              <p className="font-mono uppercase text-cream/70 text-[11px] sm:text-[12px] mt-2 tracking-[1px]">
                {item.org}
              </p>
              <p className="font-mono text-cream/85 text-[13px] sm:text-[14px] leading-[1.6] mt-5">
                {item.desc}
              </p>
              {item.tags && (
                <div className="flex flex-wrap gap-2 mt-auto pt-6">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono uppercase text-cream/80 text-[10px] sm:text-[11px] tracking-[1px] px-3 py-1 rounded-full border border-white/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
