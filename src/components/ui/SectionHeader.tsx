"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  accentColor?: "blue" | "orange";
}

export default function SectionHeader({
  label,
  title,
  highlight,
  subtitle,
  accentColor = "blue",
}: SectionHeaderProps) {
  const accent = accentColor === "blue" ? "text-[#00d4ff]" : "text-[#FF9900]";
  const borderColor = accentColor === "blue" ? "border-[#00d4ff]/40" : "border-[#FF9900]/40";
  const textColor = accentColor === "blue" ? "text-[#00d4ff]" : "text-[#FF9900]";
  const bgColor = accentColor === "blue" ? "bg-[#00d4ff]/5" : "bg-[#FF9900]/5";
  const lineColor = accentColor === "blue" ? "bg-gradient-to-r from-[#00d4ff] to-transparent" : "bg-gradient-to-r from-[#FF9900] to-transparent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <span className={`inline-block font-mono text-xs tracking-widest uppercase px-3 py-1 rounded border ${borderColor} ${textColor} ${bgColor} mb-4`}>
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        {title}{" "}
        {highlight && <span className={accent}>{highlight}</span>}
      </h2>
      <div className={`h-px w-16 mx-auto ${lineColor}`} />
      {subtitle && (
        <p className="text-gray-500 mt-4 text-sm max-w-lg mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
