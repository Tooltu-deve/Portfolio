"use client";

import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

type IconComponent = React.ComponentType<{ className?: string }>;

function SocialButton({ icon: Icon, label, href }: { icon: IconComponent; label: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="liquid-glass rounded-[1rem] w-14 h-14 flex items-center justify-center hover:bg-white/10 transition-colors"
    >
      <Icon className="w-5 h-5 text-cream" />
    </a>
  );
}

export default function HeroSection() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden rounded-b-[32px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
      />

      <div className="relative z-10 max-w-[1831px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 h-full flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between pt-6 sm:pt-8 lg:pt-10">
          <span className="flex items-center gap-2.5 font-grotesk text-[24px] uppercase tracking-wide text-cream">
            <img
              src="/icon.svg?v=2"
              alt="Tu Portfolio favicon"
              className="w-[42px] h-[42px] object-contain"
              loading="lazy"
            />
            Tan Tu
          </span>

          <nav className="liquid-glass rounded-[28px] px-[52px] py-[24px] hidden lg:block">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-grotesk text-[13px] uppercase text-cream hover:text-neon transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <span className="w-[80px] hidden lg:block" />
        </header>

        {/* Hero content */}
        <div className="flex-1 flex flex-col justify-start pt-12 sm:pt-16 md:pt-20 lg:pt-24">
          <div className="relative max-w-[820px] lg:ml-24">
            <h1 className="font-grotesk uppercase text-cream text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[1.05] sm:leading-[1]">
              Building systems
              <br />
              beyond the ( extra ) ordinary
            </h1>

            <span
              className="font-condiment text-neon absolute -top-2 right-0 sm:right-4 md:-top-4 lg:right-[-60px] -rotate-1 opacity-90 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]"
              style={{ mixBlendMode: "exclusion" }}
            >
              cloud engineer
            </span>
          </div>

          {/* Social icons — mobile */}
          <div className="flex lg:hidden items-center justify-center gap-3 mt-10">
            <SocialButton icon={Mail} label="Email" href="mailto:msp.cloud@vng.com.vn" />
            <SocialButton icon={LinkedinIcon} label="LinkedIn" href="https://www.linkedin.com/in/tantu1906" />
            <SocialButton icon={GithubIcon} label="Github" href="https://github.com/Tooltu-deve" />
          </div>
        </div>
      </div>

      {/* Social icons — desktop */}
      <div className="hidden lg:flex absolute top-28 right-10 z-10 flex-col gap-3">
        <SocialButton icon={Mail} label="Email" href="mailto:msp.cloud@vng.com.vn" />
        <SocialButton icon={LinkedinIcon} label="LinkedIn" href="https://www.linkedin.com/in/tantu1906" />
        <SocialButton icon={GithubIcon} label="Github" href="https://github.com/Tooltu-deve" />
      </div>
    </section>
  );
}
