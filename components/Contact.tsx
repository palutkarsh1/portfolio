"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center py-24 max-w-2xl mx-auto text-center" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                <motion.p
                    className="text-accent font-mono text-sm md:text-base mb-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    04. What&apos;s Next?
                </motion.p>

                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-heading mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2 }}
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    className="text-foreground text-lg leading-relaxed mb-12 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 }}
                >
                    I&apos;m currently seeking backend-focused roles with strong emphasis on{" "}
                    <span className="text-accent font-mono">FastAPI</span>. Whether you have an
                    opportunity, a question, or just want to say hi, my inbox is always open.
                </motion.p>

                <motion.a
                    href="mailto:palutkarsh1901@gmail.com"
                    className="btn-primary inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Say Hello
                </motion.a>
            </motion.div>

            <motion.footer
                className="mt-24 text-foreground text-sm font-mono"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
            >
                <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
                <p className="mt-2">Designed & Developed by Utkarsh Pal</p>
            </motion.footer>
        </section>
    );
}
