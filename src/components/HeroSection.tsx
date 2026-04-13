"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Cloud, Server } from "lucide-react";

const TYPEWRITER_PHRASES = [
  "Building Scalable Cloud Solutions",
  "Architecting AWS Infrastructure",
  "Designing Cloud-Native Systems",
];

function Typewriter() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const phrase = TYPEWRITER_PHRASES[phraseIdx];
    const speed = isDeleting ? 40 : 80;
    const pause = isDeleting ? 0 : 2000;

    if (!isDeleting && displayed === phrase) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pause);
      return;
    }
    if (isDeleting && displayed === "") {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIdx((i) => (i + 1) % TYPEWRITER_PHRASES.length);
      }, 200);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setDisplayed(
        isDeleting ? phrase.slice(0, displayed.length - 1) : phrase.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, isDeleting, phraseIdx]);

  return (
    <span>
      {displayed}
      <span className="cursor-blink text-[#00d4ff]">|</span>
    </span>
  );
}

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 4, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as [number, number, number, number] },
  },
};

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden"
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-[#00d4ff]/5 via-transparent to-transparent pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        variants={floatVariants}
        initial="initial"
        animate="animate"
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00d4ff]/3 blur-3xl pointer-events-none"
      />
      <motion.div
        variants={floatVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#FF9900]/3 blur-3xl pointer-events-none"
      />

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 text-[#00d4ff]/20 font-mono text-xs hidden lg:block">
        <div>[ SYS:ONLINE ]</div>
        <div className="mt-1">[ STACK:READY ]</div>
      </div>
      <div className="absolute top-24 right-8 text-[#FF9900]/20 font-mono text-xs text-right hidden lg:block">
        <div>AWS:CERTIFIED</div>
        <div className="mt-1">BUILD:PASSING</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-[#00d4ff]/20 rounded-full bg-[#00d4ff]/5 font-mono text-xs text-[#00d4ff]"
        >
          <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
          Available for Opportunities
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="font-mono text-gray-500 text-sm mb-2 tracking-widest uppercase">
            Hi, I&apos;m
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="text-white">Nguyen </span>
            <span className="gradient-text-blue">Tu</span>
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xl md:text-2xl text-gray-300 mb-6 min-h-[2rem]"
        >
          <Typewriter />
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate about{" "}
          <span className="text-[#FF9900] font-medium">AWS cloud architecture</span> and
          building{" "}
          <span className="text-[#00d4ff] font-medium">cloud-native backend systems</span>.
          Currently sharpening skills toward becoming an DevOps/Cloud Engineer.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 212, 255, 0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 bg-[#00d4ff] text-black font-mono font-semibold text-sm rounded border border-[#00d4ff] hover:bg-[#00d4ff]/90 transition-colors w-full sm:w-auto"
          >
            <Server className="w-4 h-4 inline mr-2 -mt-0.5" />
            View Projects
          </motion.button>

          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 153, 0, 0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 border border-[#FF9900]/40 text-[#FF9900] font-mono font-semibold text-sm rounded hover:bg-[#FF9900]/10 hover:border-[#FF9900] transition-all w-full sm:w-auto"
          >
            <Cloud className="w-4 h-4 inline mr-2 -mt-0.5" />
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Tech stack pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 flex flex-wrap justify-center gap-3 font-mono text-xs text-gray-500"
        >
          {["AWS", "NestJS", "TypeScript", "Docker", "Node.js"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 border border-white/5 rounded bg-white/3 hover:border-[#00d4ff]/30 hover:text-[#00d4ff] transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.5 }, y: { delay: 1, duration: 2, repeat: Infinity } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 hover:text-[#00d4ff] transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
