"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "YouTube Playlist Analyzer",
        description:
            "Server-side playlist scraping using Crawlee with data visualization of views and videos. UUID-based scraping strategy to avoid cache collisions.",
        technologies: ["Next.js", "React", "Tailwind", "Crawlee", "Playwright"],
        liveUrl: "https://yt-playlist-analyzer.onrender.com/",
        featured: true,
    },
    {
        title: "Travel Itinerary Management System",
        description:
            "Backend system for managing travel itineraries with REST APIs, proper schema design, and MCP server for recommendations. Auto-seeded database with realistic data and OpenAPI documentation.",
        technologies: ["FastAPI", "SQLAlchemy", "PostgreSQL", "OpenAPI"],
        liveUrl: "https://travel-itenary-frontend.vercel.app/login",
        githubUrl: "https://github.com/UttkarrshhPal",
        featured: true,
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center py-24 max-w-4xl" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-heading">Projects</h2>

                <div className="mt-8 space-y-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-heading font-semibold text-xl">{project.title}</h3>
                                <div className="flex gap-3">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground hover:text-accent transition-colors"
                                            aria-label="GitHub Repository"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground hover:text-accent transition-colors"
                                            aria-label="Live Demo"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-foreground mb-4 leading-relaxed">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {project.liveUrl && (
                                <div className="mt-4 pt-4 border-t border-foreground/10">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-underline text-sm font-mono inline-flex items-center gap-1"
                                    >
                                        View Live Demo
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <a
                        href="https://github.com/UttkarrshhPal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <Github size={18} />
                        View More on GitHub
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
