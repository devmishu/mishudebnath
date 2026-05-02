"use client";
import React from "react";
import { motion } from "framer-motion";

const Qualification = () => {
    const education = [
        {
            title: "Bachelor of Business Administration",
            institute: "University of Barishal",
            year: "2021 - 2025",
        },
        {
            title: "Higher Secondary Certificate",
            institute: "Amrita Lal Dey College",
            year: "2018 - 2020",
        },
    ];

    const experience = [
        {
            title: "Frontend Developer (Intern)",
            institute: "Digital Agency",
            year: "2023 - Present",
        },
        {
            title: "Freelance UI Designer",
            institute: "Remote",
            year: "2022 - 2023",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="qualification" className="w-full bg-background py-12 px-6 flex flex-col items-center transition-colors duration-300">
            <div className="max-w-5xl w-full">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-blue-500 dark:text-blue-400 font-bold tracking-[0.2em] uppercase text-sm">
                        My personal journey
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
                        Qualification
                    </h2>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-8"
                >
                    {/* Category Labels */}
                    <div className="hidden md:flex items-center justify-center gap-2 mb-12">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Education</h3>
                    </div>
                    <div className="hidden md:flex items-center justify-center gap-2 mb-12">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h3 className="text-2xl font-bold text-slate-100">Experience</h3>
                    </div>

                    {/* Timeline Data */}
                    <div className="relative md:col-span-2">
                        {/* Central Line */}
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-blue-600/40 hidden md:block" />

                        {/* Mobile Category Label for Education */}
                        <div className="md:hidden flex items-center justify-center gap-2 mb-8">
                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                            <h3 className="text-2xl font-bold text-slate-100">Education</h3>
                        </div>

                        {/* Iterating Content */}
                        <div className="space-y-12">
                            {/* Education Items */}
                            {education.map((item, index) => (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-2 group">
                                    <motion.div 
                                        variants={itemVariants}
                                        className="md:pr-12 md:text-right relative"
                                    >
                                        <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-6 rounded-3xl shadow-lg transition-all hover:border-blue-500/50">
                                            <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">{item.title}</h4>
                                            <p className="text-slate-900 dark:text-slate-100">{item.institute}</p>
                                            <div className="flex items-center gap-2 mt-3 md:justify-end text-sm font-medium text-blue-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" />
                                                </svg>
                                                {item.year}
                                            </div>
                                        </div>
                                        {/* Dot on line */}
                                        <div className="absolute top-1/2 -translate-y-1/2 right-[-9px] w-4 h-4 rounded-full bg-blue-600 hidden md:block border-4 border-background z-10" />
                                    </motion.div>
                                    <div className="hidden md:block" />
                                </div>
                            ))}

                            {/* Mobile Category Label for Experience */}
                            <div className="md:hidden flex items-center justify-center gap-2 mb-8 mt-12">
                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <h3 className="text-2xl font-bold text-slate-100">Experience</h3>
                            </div>

                            {/* Experience Items */}
                            {experience.map((item, index) => (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-2 group mt-8 md:mt-0">
                                    <div className="hidden md:block" />
                                    <motion.div 
                                        variants={itemVariants}
                                        className="md:pl-12 relative"
                                    >
                                        <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-6 rounded-3xl shadow-lg transition-all hover:border-blue-500/50">
                                            <h4 className="text-xl font-bold text-slate-100">{item.title}</h4>
                                            <p className="text-slate-100">{item.institute}</p>
                                            <div className="flex items-center gap-2 mt-3 text-sm font-medium text-blue-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" />
                                                </svg>
                                                {item.year}
                                            </div>
                                        </div>
                                        {/* Dot on line */}
                                        <div className="absolute top-1/2 -translate-y-1/2 left-[-9px] w-4 h-4 rounded-full bg-blue-600 hidden md:block border-4 border-background z-10" />
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Qualification;
