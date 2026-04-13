"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Cpu, Target, Rocket, BrainCircuit } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const timeline = [
  { year: "2022", event: "Started IT degree — Computer Science" },
  { year: "2023", event: "Deep-dive into Backend Development with Node.js & NestJS" },
  { year: "2024", event: "Discovered AWS cloud architecture & DevOps practices" },
  { year: "2025→", event: "Pursuing DevOps/Cloud Engineer career path" },
];

const goals = [
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Cloud Architecture",
    desc: "Design fault-tolerant, highly available systems on AWS leveraging EKS, Lambda, and serverless patterns.",
  },
  {
    icon: <BrainCircuit className="w-5 h-5" />,
    title: "AI Integration",
    desc: "Build intelligent cloud-native applications by integrating ML/AI pipelines with scalable infrastructure.",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "DevOps Excellence",
    desc: "Establish automated CI/CD pipelines and infrastructure-as-code to ship fast and reliably.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="// about.me"
          title="Who"
          highlight="I Am"
          subtitle="A brief introduction to my background and what drives me."
          accentColor="blue"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Personal intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="neon-border rounded-xl p-6 bg-[#111] transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] flex-shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">IT Student</h3>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm font-mono mt-0.5">
                    <MapPin className="w-3 h-3" />
                    Vietnam
                  </div>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed text-sm">
                I&apos;m an IT undergraduate with a deep passion for{" "}
                <span className="text-[#00d4ff]">cloud computing</span> and{" "}
                <span className="text-[#00d4ff]">CI/CD Pipelines</span>. I enjoy tackling
                complex distributed systems problems and translating architecture diagrams into
                production-ready code.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm mt-3">
                When I&apos;m not writing code, you&apos;ll find me exploring AWS documentation,
                studying cloud-native patterns, or experimenting with infrastructure automation.
                I believe great engineers are relentless learners.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs text-gray-500 tracking-widest uppercase">
                — Journey
              </h4>
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4 items-start"
                >
                  <span className="font-mono text-xs text-[#00d4ff] w-12 flex-shrink-0 pt-0.5">
                    {item.year}
                  </span>
                  <div className="flex-1 flex items-start gap-3">
                    <div className="w-px h-full bg-[#00d4ff]/20 mt-2 flex-shrink-0" />
                    <p className="text-gray-400 text-sm">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Objectives */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-4 h-4 text-[#FF9900]" />
              <h3 className="font-mono text-xs text-[#FF9900] tracking-widest uppercase">
                Career Objectives
              </h3>
            </div>

            {/* Mission statement */}
            <div className="p-5 rounded-xl border border-[#FF9900]/15 bg-[#FF9900]/3 mb-6">
              <p className="font-mono text-sm text-gray-300 leading-relaxed">
                <span className="text-[#FF9900]">Goal:</span> Become a proficient{" "}
                <span className="text-white font-semibold">DevOps/Cloud Engineer</span>, building
                intelligent, auto-scaling cloud infrastructure that powers next-generation
                applications on AWS.
              </p>
            </div>

            {goals.map((goal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex gap-4 p-4 rounded-lg border border-white/5 bg-[#111] hover:border-[#FF9900]/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF9900]/10 border border-[#FF9900]/20 flex items-center justify-center text-[#FF9900] flex-shrink-0">
                  {goal.icon}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">{goal.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{goal.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { value: "3+", label: "Projects" },
                { value: "5+", label: "AWS Services" },
                { value: "2+", label: "Years Coding" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center p-3 rounded-lg border border-white/5 bg-[#111]"
                >
                  <div className="font-mono text-2xl font-bold gradient-text-blue">{stat.value}</div>
                  <div className="text-gray-600 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
