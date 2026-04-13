import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyen Tan Tu | DevOps & Cloud Engineer",
  description:
    "Personal portfolio of Nguyen Tan Tu — DevOps & Cloud Engineer specializing in AWS, CI/CD Pipelines, and cloud-native solutions.",
  keywords: ["AWS", "Cloud Engineer", "DevOps", "CI/CD Pipelines", "TypeScript", "Portfolio"],
  openGraph: {
    title: "Nguyen Tan Tu | DevOps & Cloud Engineer",
    description:
      "Building scalable cloud solutions with AWS, CI/CD Pipelines, and modern DevOps practices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
