"use client";

import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";

const CONTACT_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4";

type IconComponent = React.ComponentType<{ className?: string }>;

interface SocialItem {
  Icon: IconComponent;
  label: string;
  href: string;
}

const socials: SocialItem[] = [
  { Icon: Mail, label: "Email", href: "mailto:tunguyen19606@gmail.com" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/tantu1906" },
  { Icon: GithubIcon, label: "Github", href: "https://github.com/Tooltu-deve" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-[#010828] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        src={CONTACT_VIDEO}
        className="block w-full h-auto"
      />

      {/* Heading + cursive accent */}
      <div className="absolute inset-0 z-10 flex items-start pt-12 sm:pt-16 md:pt-20 lg:pt-24">
        <div className="w-full max-w-[1831px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 lg:pl-[15%] lg:pr-[20%]">
          <div className="ml-auto max-w-[820px] text-right relative">
            <span
              className="font-condiment text-neon absolute -top-3 sm:-top-5 md:-top-8 lg:-top-12 left-0 text-[17px] sm:text-[28px] md:text-[44px] lg:text-[68px] -rotate-2"
              style={{ mixBlendMode: "exclusion" }}
            >
              let&apos;s talk
            </span>

            <h2 className="font-grotesk uppercase text-cream text-[16px] sm:text-[28px] md:text-[44px] lg:text-[60px] leading-[1.05]">
              <span className="block mb-4 sm:mb-6 md:mb-8 lg:mb-12">REACH OUT TO ME!</span>
              <span className="block">BUILD SOMETHING TOGETHER</span>
              <span className="block">OR JUST SHARE AN IDEA</span>
              <span className="block">THE SIGNAL IS ALWAYS OPEN</span>
            </h2>

            <a
              href="mailto:tunguyen19606@gmail.com"
              className="inline-block mt-6 sm:mt-8 md:mt-10 font-grotesk uppercase text-neon text-[14px] sm:text-[16px] md:text-[18px] tracking-[1.5px] border-b-2 border-neon hover:opacity-80 transition-opacity"
            >
              tunguyen19606@gmail.com ↗
            </a>

            <div className="mt-5 sm:mt-6 md:mt-8 flex justify-end">
              <div className="liquid-glass rounded-[0.75rem] sm:rounded-[1rem] lg:rounded-[1.25rem] flex overflow-hidden border border-white/15">
                {socials.map(({ Icon, label, href }, idx) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className={`flex items-center justify-center hover:bg-white/10 transition-colors w-[3.25rem] h-[3.25rem] sm:w-[4rem] sm:h-[4rem] lg:w-[4.5rem] lg:h-[4.5rem] ${
                      idx === socials.length - 1 ? "" : "border-r border-white/10"
                    }`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cream" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
