import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utkarsh Pal - Full Stack Developer | Backend (FastAPI) | Analyst",
  description: "Full Stack Developer and Analyst with expertise in backend engineering, FastAPI, AI/ML systems, and scalable cloud applications. Currently at Deloitte.",
  keywords: ["Utkarsh Pal", "Full Stack Developer", "FastAPI", "Backend Engineer", "React", "Next.js", "AI/ML", "LangChain"],
  authors: [{ name: "Utkarsh Pal" }],
  openGraph: {
    title: "Utkarsh Pal - Full Stack Developer",
    description: "Full Stack Developer specializing in backend engineering with FastAPI, React, and cloud technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
