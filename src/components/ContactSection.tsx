"use client";

import { motion } from "framer-motion";
import { Mail, Terminal } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? "w-5 h-5"} fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const quickLinks = [
  {
    label: "GitHub",
    value: "loviti",
    href: "https://github.com/Tooltu-deve",
    icon: <GithubIcon />,
    hoverBorder: "hover:border-white/30",
    hoverText: "hover:text-white",
  },
  {
    label: "LinkedIn",
    value: "Tan Tu",
    href: "https://www.linkedin.com/in/tantu1906",
    icon: <LinkedinIcon />,
    hoverBorder: "hover:border-blue-500/40",
    hoverText: "hover:text-blue-400",
  },
  {
    label: "Email",
    value: "tunguyen19606@gmail.com",
    href: "mailto:tunguyen19606@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    hoverBorder: "hover:border-[#FF9900]/40",
    hoverText: "hover:text-[#FF9900]",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6">
        <SectionHeader
          label="// contact.init()"
          title="Get In"
          highlight="Touch"
          subtitle="Open to internships, collaborations, and exciting cloud engineering opportunities."
          accentColor="blue"
        />

        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-4 h-4 text-[#00d4ff]" />
            <h3 className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase">
              Connect
            </h3>
          </div>

          {quickLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 4 }}
              className={`flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-[#111] text-gray-400 transition-all duration-200 ${link.hoverBorder} ${link.hoverText} group`}
            >
              <div className="w-9 h-9 rounded-lg bg-white/3 border border-white/5 flex items-center justify-center group-hover:border-white/10 transition-colors flex-shrink-0">
                {link.icon}
              </div>
              <div>
                <div className="text-xs text-gray-500 font-mono">{link.label}</div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {link.value}
                </div>
              </div>
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 p-4 rounded-lg border border-emerald-500/15 bg-emerald-500/3"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-emerald-400">AVAILABLE</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Currently open to internship opportunities in{" "}
              <span className="text-emerald-400">Cloud Engineering</span> and{" "}
              <span className="text-emerald-400">DevOps Engineering</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
