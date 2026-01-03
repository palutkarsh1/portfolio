"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center max-w-4xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.p
                    className="text-accent font-mono text-sm md:text-base mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    Hi, my name is
                </motion.p>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-heading mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Utkarsh Pal.
                </motion.h1>

                <motion.h2
                    className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    I build scalable backend systems.
                </motion.h2>

                <motion.p
                    className="text-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    I'm a <span className="text-accent">Full Stack Developer</span> and{" "}
                    <span className="text-accent">Analyst</span> specializing in backend
                    engineering with <span className="text-accent font-mono">FastAPI</span>,
                    AI/ML systems, and production-ready cloud applications. Currently building
                    enterprise-scale systems at <span className="text-heading">Deloitte</span>.
                </motion.p>

                <motion.a
                    href="mailto:palutkarsh1901@gmail.com"
                    className="btn-primary inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get In Touch
                </motion.a>
            </motion.div>
        </section>
    );
}
