"use client";

import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Skip to content link for accessibility */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-background focus:rounded"
      >
        Skip to Content
      </a>

      {/* Left Sidebar - Navigation */}
      <aside className="fixed top-0 left-0 h-screen w-auto p-12 hidden lg:flex flex-col justify-between z-10">
        <div>
          <h1 className="text-heading font-bold text-2xl mb-12">UP</h1>
          <Navigation />
        </div>
      </aside>

      {/* Social Links - Fixed Bottom Left */}
      <SocialLinks />

      {/* Email - Fixed Bottom Right */}
      <div className="hidden lg:flex flex-col items-center space-y-6 fixed bottom-0 right-12">
        <a
          href="mailto:palutkarsh1901@gmail.com"
          className="text-foreground hover:text-accent transition-all duration-300 font-mono text-sm vertical-text hover:-translate-y-1"
          style={{ writingMode: "vertical-rl" }}
        >
          palutkarsh1901@gmail.com
        </a>
        <div className="w-[1px] h-24 bg-foreground" />
      </div>

      {/* Main Content */}
      <main id="content" className="ml-0 lg:ml-[400px] mr-0 lg:mr-[200px] px-6 md:px-12 lg:px-24 counter-reset">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-foreground/10 z-50">
        <div className="flex justify-around items-center py-4 px-6">
          {["about", "experience", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-foreground hover:text-accent transition-colors text-xs font-mono uppercase"
            >
              {section}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
