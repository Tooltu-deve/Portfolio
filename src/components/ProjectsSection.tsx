"use client";

import { motion } from "framer-motion";
import { ExternalLink, Cloud, Server, Database, Lock } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? "w-4 h-4"} fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
import SectionHeader from "@/components/ui/SectionHeader";

interface Project {
  title: string;
  description: string;
  longDesc: string;
  tags: string[];
  icon: React.ReactNode;
  accentColor: string;
  borderColor: string;
  bgColor: string;
  github: string;
  demo?: string;
  status: "Live" | "WIP" | "Completed";
}

const projects: Project[] = [
  {
    title: "Cloud-Native API Gateway",
    description: "Serverless REST API with auto-scaling on AWS",
    longDesc:
      "A production-ready REST API built with NestJS, deployed on AWS Lambda with API Gateway. Features JWT auth, rate limiting, and CloudWatch monitoring. Infrastructure managed with Terraform.",
    tags: ["AWS Lambda", "NestJS", "TypeScript", "API Gateway", "Terraform"],
    icon: <Cloud className="w-6 h-6" />,
    accentColor: "#FF9900",
    borderColor: "border-[#FF9900]/20",
    bgColor: "bg-[#FF9900]/5",
    github: "https://github.com",
    demo: "https://demo.example.com",
    status: "Live",
  },
  {
    title: "Microservices E-Commerce",
    description: "Scalable microservices architecture with Docker & EKS",
    longDesc:
      "Event-driven microservices system using NestJS + RabbitMQ. Containerized with Docker and orchestrated on AWS EKS. Includes CI/CD pipeline with GitHub Actions and automated testing.",
    tags: ["AWS EKS", "Docker", "NestJS", "RabbitMQ", "GitHub Actions"],
    icon: <Server className="w-6 h-6" />,
    accentColor: "#00d4ff",
    borderColor: "border-[#00d4ff]/20",
    bgColor: "bg-[#00d4ff]/5",
    github: "https://github.com",
    status: "Completed",
  },
  {
    title: "Real-Time Data Pipeline",
    description: "Streaming analytics pipeline on AWS",
    longDesc:
      "Built a real-time data ingestion and processing pipeline using AWS Kinesis, Lambda, and DynamoDB. Handles 10K+ events/second with sub-100ms latency and automatic scaling.",
    tags: ["AWS Kinesis", "Lambda", "DynamoDB", "Python", "S3"],
    icon: <Database className="w-6 h-6" />,
    accentColor: "#a855f7",
    borderColor: "border-purple-500/20",
    bgColor: "bg-purple-500/5",
    github: "https://github.com",
    status: "WIP",
  },
  {
    title: "IAM Security Audit Tool",
    description: "Automated AWS IAM policy analyzer & reporter",
    longDesc:
      "CLI tool to scan and audit AWS IAM policies for security misconfigurations and overly permissive rules. Generates HTML/JSON reports with risk scores. Built with Python and Boto3.",
    tags: ["AWS IAM", "Python", "Boto3", "Security", "CLI"],
    icon: <Lock className="w-6 h-6" />,
    accentColor: "#10b981",
    borderColor: "border-emerald-500/20",
    bgColor: "bg-emerald-500/5",
    github: "https://github.com",
    status: "Completed",
  },
];

const statusStyles: Record<string, string> = {
  Live: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  Completed: "bg-[#00d4ff]/10 border-[#00d4ff]/30 text-[#00d4ff]",
  WIP: "bg-[#FF9900]/10 border-[#FF9900]/30 text-[#FF9900]",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative flex flex-col rounded-xl border border-white/5 bg-[#111] overflow-hidden transition-all duration-300 hover:border-white/10"
      style={{
        boxShadow: "0 0 0 0 transparent",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${project.accentColor}18`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 transparent";
      }}
    >
      {/* Top accent line */}
      <div
        className="h-px w-full"
        style={{ background: `linear-gradient(90deg, ${project.accentColor}60, transparent)` }}
      />

      {/* Card image / illustration area */}
      <div className={`relative h-40 ${project.bgColor} border-b border-white/5 flex items-center justify-center overflow-hidden`}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(${project.accentColor}15 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor}15 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Icon */}
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="relative z-10 flex flex-col items-center gap-2"
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center border"
            style={{
              backgroundColor: `${project.accentColor}15`,
              borderColor: `${project.accentColor}30`,
              color: project.accentColor,
            }}
          >
            {project.icon}
          </div>
        </motion.div>

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${statusStyles[project.status]}`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-white font-semibold text-base mb-1.5">{project.title}</h3>
        <p className="text-gray-500 text-sm mb-3">{project.description}</p>
        <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">{project.longDesc}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/8 bg-white/3 text-gray-400 hover:text-gray-200 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            Code
          </motion.a>
          {project.demo && (
            <>
              <span className="text-white/10">|</span>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 font-mono text-xs transition-colors"
                style={{ color: project.accentColor }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </motion.a>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="// projects.list"
          title="Featured"
          highlight="Projects"
          subtitle="A selection of cloud and backend projects I've built or am currently working on."
          accentColor="orange"
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0,212,255,0.2)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#00d4ff]/30 text-[#00d4ff] font-mono text-sm rounded hover:bg-[#00d4ff]/10 transition-all duration-200"
          >
            <GithubIcon className="w-4 h-4" />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
