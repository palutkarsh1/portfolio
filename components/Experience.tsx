"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const experiences = [
    {
        company: "Deloitte",
        role: "Analyst",
        period: "Sep 2025 – Present",
        location: "Hyderabad",
        description: [
            "Building enterprise backend systems using Java and Spring Boot",
            "Working with large-scale data, APIs, and production-grade workflows",
            "Collaborating with cross-functional teams in a regulated environment",
        ],
        technologies: ["Java", "Spring Boot", "Enterprise Systems", "APIs"],
        url: "https://www2.deloitte.com/",
    },
    {
        company: "Knot.dating",
        role: "Software Engineer Intern",
        period: "May 2025 – Jul 2025",
        location: "Gurugram",
        description: [
            "Designed and deployed AI agents using LLMs (OpenAI, Anthropic) with LangChain and CrewAI",
            "Built API-driven MVPs integrating vector databases (FAISS, Pinecone)",
            "Implemented RAG pipelines and agent orchestration",
            "Worked closely with product and data teams in a fast-paced startup",
        ],
        technologies: ["LangChain", "CrewAI", "OpenAI", "FAISS", "Pinecone", "RAG"],
        url: "https://knot.dating/",
    },
    {
        company: "SignalX.ai",
        role: "SDE Intern",
        period: "Apr 2025 – May 2025",
        location: "Hyderabad",
        description: [
            "Built backend services using FastAPI and Go",
            "Designed RESTful APIs and backend architecture",
            "Automated data pipelines for ingestion and processing",
            "Deployed systems on AWS and GCP",
            "Built internal frontend tools using React",
        ],
        technologies: ["FastAPI", "Go", "React", "AWS", "GCP", "PostgreSQL"],
        url: "https://signalx.ai/",
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="experience" className="min-h-screen flex flex-col justify-center py-24 max-w-4xl" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-heading">Experience</h2>

                <div className="mt-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            className="experience-card mb-4"
                            onMouseEnter={() => setActiveIndex(index)}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                                <div className="flex-1">
                                    <h3 className="text-heading font-semibold text-lg">
                                        {exp.role} ·{" "}
                                        <a
                                            href={exp.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link-underline inline-flex items-center gap-1"
                                        >
                                            {exp.company}
                                            <ExternalLink size={16} />
                                        </a>
                                    </h3>
                                    <p className="text-foreground text-sm font-mono mt-1">
                                        {exp.period} | {exp.location}
                                    </p>
                                </div>
                            </div>

                            <ul className="space-y-2 mt-4 mb-4">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start text-foreground">
                                        <span className="text-accent mr-3 mt-1">▹</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                    <span key={tech} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
