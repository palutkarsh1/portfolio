"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export default function Navigation() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="hidden lg:block">
            <ul className="space-y-2">
                {navItems.map((item, index) => (
                    <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <button
                            onClick={() => scrollToSection(item.id)}
                            className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                        >
                            {item.label}
                        </button>
                    </motion.li>
                ))}
            </ul>
        </nav>
    );
}
