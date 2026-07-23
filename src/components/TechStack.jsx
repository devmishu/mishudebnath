"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroUIIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-white">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const TechStack = () => {
    const technologies = [
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
        { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "Express.js", icon: "https://cdn.simpleicons.org/express/white" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="tech-stack" className="w-full bg-background py-24 px-6 flex flex-col items-center">
            <div className="max-w-6xl w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 space-y-4"
                >
                    <p className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm">
                        My Tech Stack
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
                        Technologies
                    </h2>
                </motion.div>

                {/* Tech Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-8 md:gap-12 justify-center"
                >
                    {technologies.map((tech) => (
                        <motion.div
                            key={tech.name}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center justify-center gap-4 group"
                        >
                            {/* Glassmorphic Icon Container */}
                            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-700 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:border-blue-500/50">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                                />
                            </div>

                            {/* Technology Name */}
                            <span className="text-slate-100 font-medium text-sm md:text-base text-center">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
