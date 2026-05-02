"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Technologies", href: "#tech-stack" },
    // { name: "Journey", href: "#qualification" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        const sections = navLinks.map(link => link.href.replace("#", ""));
        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
                    ? "bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 shadow-lg"
                    : "bg-transparent hover:bg-[#020617]/40 hover:backdrop-blur-md"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="relative z-10 text-xl md:text-2xl font-bold tracking-tighter text-white flex items-center gap-1 hover:opacity-80 transition-opacity"
                >
                    <span className="text-blue-500">M</span>ishu.
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name} className="relative z-10">
                                <Link
                                    href={link.href}
                                    className={`text-sm font-medium transition-all pb-2 border-b-[3px] ${
                                        activeSection === link.href.replace("#", "")
                                            ? "text-white border-blue-500"
                                            : "text-slate-300 border-transparent hover:text-white"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="relative z-10 flex items-center gap-4 pl-4 border-l border-white/10">
                        <Link
                            href="#contact"
                            className="px-5 py-2 rounded-full bg-white text-[#020617] text-sm font-semibold hover:bg-blue-500 hover:text-white transition-all shadow-lg active:scale-95"
                        >
                            Let's Talk
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu Toggle & ThemeToggle */}
                <div className="flex items-center gap-4 md:hidden">

                    <button
                        className="w-10 h-10 flex flex-col items-center justify-center gap-[6px] relative z-50 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <motion.span
                            className="w-6 h-[2px] bg-white rounded-full block"
                            animate={{
                                rotate: isMobileMenuOpen ? 45 : 0,
                                y: isMobileMenuOpen ? 8 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="w-6 h-[2px] bg-white rounded-full block"
                            animate={{
                                opacity: isMobileMenuOpen ? 0 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="w-6 h-[2px] bg-white rounded-full block"
                            animate={{
                                rotate: isMobileMenuOpen ? -45 : 0,
                                y: isMobileMenuOpen ? -8 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-20 left-0 w-full bg-[#020617]/95 backdrop-blur-2xl border-b border-white/5 shadow-2xl md:hidden z-[90]"
                    >
                        <ul className="flex flex-col items-center py-8 gap-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`text-lg font-medium transition-all pb-1 border-b-2 ${
                                            activeSection === link.href.replace("#", "")
                                                ? "text-white border-blue-500"
                                                : "text-slate-300 border-transparent hover:text-white"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-4 mt-2 border-t border-white/10 w-[80%] flex justify-center">
                                <Link
                                    href="#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-8 py-3 rounded-full bg-white text-[#020617] font-semibold hover:bg-slate-200 transition-colors shadow-lg"
                                >
                                    Let's Talk
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
