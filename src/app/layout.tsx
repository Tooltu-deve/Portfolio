import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Tan Tu",
  description:
    "Portfolio - Tan Tu - A portfolio website for Tan Tu.",
  icons: {
    icon: "/icon.svg?v=2",
    shortcut: "/icon.svg?v=2",
    apple: "/icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#010828] text-cream font-grotesk">
        {children}
      </body>
    </html>
  );
}
