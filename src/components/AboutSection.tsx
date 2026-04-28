"use client";

const ABOUT_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4";

const INTRO_POINTS = [
  "A second-year IT student at VNU-HCM University of Science with a deep-seated passion for backend development and cloud-native solutions.",
  "I focus on architecting scalable systems and automating deployments through CI/CD pipelines on AWS.",
  "Driven by a hands-on learning philosophy, I am constantly bridging the gap between academic theory and real-world infrastructure challenges.",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={ABOUT_VIDEO}
      />
      <div className="absolute inset-0 bg-[#010828]/45 lg:hidden" />

      <div className="relative z-10 max-w-[1831px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-24 min-h-screen flex flex-col justify-between">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-16 w-full">
          <div className="flex flex-col self-start">
            <span
              className="font-condiment text-neon -rotate-2 text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] self-start mb-2 sm:mb-3"
              style={{ mixBlendMode: "exclusion" }}
            >
              about me
            </span>
            <h2 className="font-grotesk uppercase text-cream text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] leading-[1.05]">
              Hello!
              <br />
              I&apos;m Nguyen Tan Tu
            </h2>
          </div>

          <div className="w-full max-w-[450px] mt-4 lg:mt-6 lg:ml-auto lg:translate-x-10 xl:translate-x-12">
            <div className="rounded-xl bg-[#010828]/55 backdrop-blur-[1.5px] p-3.5 sm:p-4 md:p-0 md:bg-transparent md:backdrop-blur-0">
              <ul className="space-y-3">
                {INTRO_POINTS.map((point) => (
                  <li
                    key={point}
                    className="font-mono uppercase text-cream text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5] flex items-start gap-3"
                  >
                    <span className="text-neon text-[16px] leading-[1.2]">✦</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="font-mono italic text-cream/90 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6] mt-3 lg:mt-4">
                &quot;Believe you can and you&apos;re halfway there.&quot;
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
