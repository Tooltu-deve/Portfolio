"use client";

import { Terminal } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-600">
          <Terminal className="w-4 h-4 text-[#00d4ff]/50" />
          <span className="font-mono text-xs">
            <span className="text-[#00d4ff]/50">~/</span>thomas-tu
          </span>
        </div>

        <p className="font-mono text-xs text-gray-600 text-center">
          © {year} Thomas Tu · Built with{" "}
          <span className="text-[#00d4ff]/60">Next.js</span> +{" "}
          <span className="text-[#FF9900]/60">AWS</span>
        </p>

        <div className="font-mono text-xs text-gray-700 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
          All systems operational
        </div>
      </div>
    </footer>
  );
}
