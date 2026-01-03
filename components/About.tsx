"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-24 max-w-4xl" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-heading">About</h2>

                <div className="space-y-4 text-foreground leading-relaxed">
                    <p>
                        I am a <span className="text-heading">Full Stack Developer</span> and{" "}
                        <span className="text-heading">Analyst</span> with hands-on experience across
                        backend engineering, AI/ML systems, and scalable cloud applications.
                    </p>

                    <p>
                        At <span className="text-heading">Deloitte</span>, I work on enterprise-scale
                        systems using <span className="text-accent font-mono">Java</span> and{" "}
                        <span className="text-accent font-mono">Spring Boot</span>.
                    </p>

                    <p>
                        At <span className="text-heading">Knot.dating</span>, I engineered AI agents
                        using LLMs with <span className="text-accent font-mono">LangChain</span> and{" "}
                        <span className="text-accent font-mono">CrewAI</span>, implemented RAG
                        pipelines, and shipped production MVPs integrating APIs and vector databases.
                    </p>

                    <p>
                        At <span className="text-heading">SignalX.ai</span>, I built backend services
                        using <span className="text-accent font-mono">FastAPI</span> and{" "}
                        <span className="text-accent font-mono">Go</span>, automated data pipelines,
                        and deployed scalable systems on{" "}
                        <span className="text-accent font-mono">AWS</span> and{" "}
                        <span className="text-accent font-mono">GCP</span>.
                    </p>

                    <p>
                        I enjoy building reliable backend systems, clean APIs, and production-ready
                        applications. Currently seeking backend-focused roles with strong emphasis on{" "}
                        <span className="text-accent font-mono">FastAPI</span>.
                    </p>

                    <p className="pt-4">
                        <span className="text-heading">Technologies I work with:</span>
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pt-2 font-mono text-sm">
                        {[
                            "FastAPI",
                            "Python",
                            "React",
                            "Next.js",
                            "TypeScript",
                            "Java",
                            "Spring Boot",
                            "Go",
                            "PostgreSQL",
                            "AWS",
                            "GCP",
                            "Docker",
                            "LangChain",
                            "CrewAI",
                            "SQLAlchemy",
                        ].map((tech) => (
                            <div key={tech} className="flex items-center space-x-2">
                                <span className="text-accent">▹</span>
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
