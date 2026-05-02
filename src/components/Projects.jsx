"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
    const projects = [
        {
            title: "KeenKeeper — Smart Relationship Manager",
            category: "SAAS Platform",
            description: "A modern web application designed to help users maintain and nurture their friendships through smart goal tracking, communication analysis, and activity visualization.",
            image: "/images/keenkeeper.png",
            tags: ["React", "Tailwind", "Daisy UI"],
            live: "https://circlekeeper.netlify.app",
            repo: "https://github.com/devmishu/circlekeeper"
        },
        {
            title: "ToolVerse  Digital Tools Buying Website",
            category: "E-Commerce",
            description: "A modern e-commerce platform featuring a dynamic cart system and responsive UI for a seamless digital tool shopping experience.",
            image: "/images/toolverse.png",
            tags: ["React", "Tailwind", "daisy ui"],
            live: "https://tool-verse.netlify.app",
            repo: "https://github.com/devmishu/tool-verse"
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="projects" className="w-full bg-[#020617] py-24 px-6 flex flex-col items-center">
            <div className="max-w-6xl w-full space-y-16">

                {/* Header Section */}

                <div className="space-y-4 flex flex-col justify-center items-center">
                    <p className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm">Portfolio</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        My Project
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl leading-relaxed text-center">
                        A selection of projects that define my commitment to quality and user experience.
                    </p>
                </div>


                {/* Projects List */}
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 max-w-175 mx-auto"> {/* কলাম বাড়ানো হয়েছে এবং গ্যাপ কমানো হয়েছে */}
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants} // অ্যানিমেশন ভ্যারিয়েন্টস যোগ করা হলো
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="shadow-lg shadow-white/5 rounded-2xl overflow-hidden bg-slate-900/50 border border-white/10 group"
                        >
                            {/* Image Section - হাইট ফিক্সড করা হয়েছে */}
                            <div className="relative overflow-hidden h-48 md:h-56 w-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                            </div>

                            {/* Content Section - প্যাডিং কমানো হয়েছে */}
                            <div className="p-6 md:p-8 flex flex-col space-y-4">
                                <span className="text-blue-500 text-[10px] font-bold tracking-[0.2em] uppercase">
                                    {project.category}
                                </span>

                                {/* টাইটেল সাইজ ছোট করা হয়েছে */}
                                <h3 className="text-xl md:text-2xl font-bold text-white line-clamp-1">
                                    {project.title}
                                </h3>

                                {/* ডেসক্রিপশন লাইন লিমিট করা হয়েছে */}
                                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 pt-2">
                                    {/* Live Link Button */}
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-white text-[#020617] rounded-lg hover:bg-slate-200 transition-all duration-300 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        Live
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>

                                    {/* Repo Link Button */}
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-white text-[#020617] rounded-lg hover:bg-slate-200 transition-all duration-300 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        Repo
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
