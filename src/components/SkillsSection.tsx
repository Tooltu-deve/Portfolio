"use client";

import { useState } from "react";

interface Skill {
  name: string;
  tag?: string;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "AWS",
    skills: [
      { name: "EC2", tag: "Compute" },
      { name: "S3", tag: "Storage" },
      { name: "Lambda", tag: "Serverless" },
      { name: "Secrets Manager", tag: "Secrets Management" },
      { name: "EKS", tag: "Kubernetes" },
      { name: "CloudFront", tag: "CDN" },
      { name: "RDS", tag: "Database" },
      { name: "IAM", tag: "Security" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", tag: "Runtime" },
      { name: "NestJS", tag: "Framework" },
      { name: "TypeScript", tag: "Language" },
      { name: "Python", tag: "Language" },
      { name: "C++", tag: "Language" },
      { name: "REST APIs", tag: "API" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", tag: "Container" },
      { name: "GitHub Actions", tag: "CI/CD" },
      { name: "Kubernetes", tag: "Orchestration" },
      { name: "Terraform", tag: "IaC" },
      { name: "Linux", tag: "OS" },
      { name: "Nginx", tag: "Proxy" },
    ],
  },
];

export default function SkillsSection() {
  const [active, setActive] = useState<string>(skillGroups[0].category);
  const current = skillGroups.find((g) => g.category === active) ?? skillGroups[0];

  return (
    <section id="skills" className="relative w-full bg-[#010828] py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-[1831px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-12 sm:mb-16">
          <h2 className="font-grotesk uppercase text-cream text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] leading-[1.05]">
            Tools
            <br />
            <span className="ml-12 sm:ml-16 md:ml-24 lg:ml-32">
              <span
                className="font-condiment text-neon normal-case"
                style={{ mixBlendMode: "exclusion" }}
              >
                of the
              </span>{" "}
              <span className="font-grotesk">trade</span>
            </span>
          </h2>

          <p className="font-mono uppercase text-cream/80 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.6] max-w-[320px]">
            Stack I reach for when shipping cloud-native systems.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {skillGroups.map((g) => {
            const isActive = active === g.category;
            return (
              <button
                key={g.category}
                onClick={() => setActive(g.category)}
                className={`font-grotesk uppercase text-[13px] tracking-[1px] px-5 py-3 rounded-[14px] transition-colors ${
                  isActive
                    ? "liquid-glass text-cream"
                    : "text-cream/60 hover:text-cream"
                }`}
              >
                {g.category}
              </button>
            );
          })}
        </div>

        {/* Skill grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {current.skills.map((s) => (
            <div
              key={s.name}
              className="liquid-glass rounded-[20px] p-5 sm:p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-grotesk uppercase text-cream text-[18px] sm:text-[20px]">
                  {s.name}
                </span>
                {s.tag && (
                  <span className="font-mono uppercase text-cream/55 text-[10px] sm:text-[11px] tracking-[1px]">
                    {s.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
