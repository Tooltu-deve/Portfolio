"use client";

import { motion } from "framer-motion";
import { Cloud, Server, GitBranch, Database } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

interface Skill {
  name: string;
  tag?: string;
}

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  color: "blue" | "orange" | "purple" | "green";
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Cloud — AWS",
    icon: <Cloud className="w-5 h-5" />,
    color: "orange",
    skills: [
      { name: "EC2", tag: "Compute" },
      { name: "S3", tag: "Storage" },
      { name: "Lambda", tag: "Serverless" },
      { name: "Route 53", tag: "DNS" },
      { name: "EKS", tag: "Kubernetes" },
      { name: "CloudFront", tag: "CDN" },
      { name: "RDS", tag: "Database" },
      { name: "IAM", tag: "Security" },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5" />,
    color: "blue",
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
    category: "DevOps & Tools",
    icon: <GitBranch className="w-5 h-5" />,
    color: "purple",
    skills: [
      { name: "Docker", tag: "Container" },
      { name: "GitHub Actions", tag: "CI/CD" },
      { name: "Kubernetes", tag: "Orchestration" },
      { name: "Terraform", tag: "IaC" },
      { name: "Linux", tag: "OS" },
      { name: "Nginx", tag: "Proxy" },
    ],
  },
  {
    category: "Databases",
    icon: <Database className="w-5 h-5" />,
    color: "green",
    skills: [
      { name: "PostgreSQL", tag: "SQL" },
      { name: "MongoDB", tag: "NoSQL" },
      { name: "Redis", tag: "Cache" },

      { name: "DynamoDB", tag: "AWS" },
    ],
  },
];

const colorMap = {
  blue: {
    icon: "bg-[#00d4ff]/10 border-[#00d4ff]/20 text-[#00d4ff]",
    header: "border-[#00d4ff]/20",
    badge: "border-[#00d4ff]/15 bg-[#00d4ff]/5 text-gray-300 hover:border-[#00d4ff]/40 hover:text-[#00d4ff]",
    tag: "text-[#00d4ff]/60",
    card: "hover:border-[#00d4ff]/30",
  },
  orange: {
    icon: "bg-[#FF9900]/10 border-[#FF9900]/20 text-[#FF9900]",
    header: "border-[#FF9900]/20",
    badge: "border-[#FF9900]/15 bg-[#FF9900]/5 text-gray-300 hover:border-[#FF9900]/40 hover:text-[#FF9900]",
    tag: "text-[#FF9900]/60",
    card: "hover:border-[#FF9900]/30",
  },
  purple: {
    icon: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    header: "border-purple-500/20",
    badge: "border-purple-500/15 bg-purple-500/5 text-gray-300 hover:border-purple-500/40 hover:text-purple-400",
    tag: "text-purple-400/60",
    card: "hover:border-purple-500/30",
  },
  green: {
    icon: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    header: "border-emerald-500/20",
    badge: "border-emerald-500/15 bg-emerald-500/5 text-gray-300 hover:border-emerald-500/40 hover:text-emerald-400",
    tag: "text-emerald-400/60",
    card: "hover:border-emerald-500/30",
  },
};

function SkillCard({ group }: { group: SkillGroup }) {
  const colors = colorMap[group.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`rounded-xl border border-white/5 bg-[#111] p-6 transition-all duration-300 ${colors.card}`}
    >
      {/* Card header */}
      <div className={`flex items-center gap-3 mb-5 pb-4 border-b ${colors.header}`}>
        <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${colors.icon}`}>
          {group.icon}
        </div>
        <h3 className="font-mono text-sm font-semibold text-white">{group.category}</h3>
      </div>

      {/* Skills — one per row */}
      <div className="space-y-1.5">
        {group.skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`flex items-center justify-between px-3 py-2 rounded-lg border font-mono cursor-default transition-all duration-200 ${colors.badge}`}
          >
            <span className="text-sm font-medium">{skill.name}</span>
            {skill.tag && (
              <span className={`text-[10px] ${colors.tag}`}>{skill.tag}</span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          label="// tech.stack"
          title="Technical"
          highlight="Skills"
          subtitle="Technologies I work with to build scalable backend systems and cloud infrastructure."
          accentColor="blue"
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {skillGroups.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>

        {/* Certifications row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 p-5 rounded-xl border border-[#FF9900]/15 bg-[#FF9900]/3 flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="w-10 h-10 rounded-lg bg-[#FF9900]/15 border border-[#FF9900]/30 flex items-center justify-center text-[#FF9900] flex-shrink-0">
            <Cloud className="w-5 h-5" />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-mono text-xs text-[#FF9900] tracking-wider uppercase mb-1">
              Certification Target
            </p>
            <p className="text-white font-medium text-sm">
              AWS Certified Solutions Architect — Associate (SAA-C03)
            </p>
            <p className="text-gray-500 text-xs mt-0.5">Currently studying · Expected 2025</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
