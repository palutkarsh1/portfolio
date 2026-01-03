"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com/UttkarrshhPal", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/utkarsh-pal-/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Utkarsh65793540", label: "Twitter" },
    { icon: Mail, href: "mailto:palutkarsh1901@gmail.com", label: "Email" },
];

export default function SocialLinks() {
    return (
        <div className="hidden lg:flex flex-col items-center space-y-6 fixed bottom-0 left-12 z-20">
            {socialLinks.map((link, index) => (
                <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-foreground hover:text-accent hover:-translate-y-1 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                >
                    <link.icon size={20} />
                </motion.a>
            ))}
            <motion.div
                className="w-[1px] h-24 bg-foreground"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 96 }}
                transition={{ delay: 1 }}
            />
        </div>
    );
}
