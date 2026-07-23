"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    useEffect(() => {
        fetch("/data/projects.json")
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch projects:", err);
                setLoading(false);
            });
    }, []);

    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            y: -30,
            transition: { duration: 0.4, ease: "easeIn" }
        }
    };

    return (
        <section id="projects" className="w-full bg-[#020617] py-24 px-6 flex flex-col items-center">
            <div className="max-w-7xl w-full space-y-16">

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

                {/* Projects List Container */}
                <div className="min-h-[520px] flex items-center justify-center w-full">
                    {loading ? (
                        <div className="text-slate-400 text-lg font-medium">Loading projects...</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                            <AnimatePresence mode="wait">
                                {currentProjects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        layout
                                        className="shadow-lg shadow-white/5 rounded-2xl overflow-hidden bg-slate-900/50 border border-white/10 group flex flex-col h-full"
                                    >
                                        {/* Image */}
                                        <div className="relative overflow-hidden h-48 md:h-56 w-full bg-[#020617]">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-contain p-2 grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 md:p-8 flex flex-col flex-1 space-y-4">
                                            <span className="text-blue-500 text-[10px] font-bold tracking-[0.2em] uppercase">
                                                {project.category}
                                            </span>

                                            <h3 className="text-xl md:text-2xl font-bold text-white line-clamp-1">
                                                {project.title}
                                            </h3>

                                            <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 flex-1">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-3">
                                                {project.tags.map(tag => (
                                                    <span
                                                        key={tag}
                                                        className="text-[10px] font-medium text-slate-500 uppercase tracking-wider"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-3 pt-2">


                                                <Link
                                                    href={`/projects/${project.id}`}
                                                    className="flex-1 px-4 py-2 bg-white text-[#020617] rounded-lg hover:bg-slate-200 transition-all duration-300 text-sm font-bold flex items-center justify-center gap-2"
                                                >
                                                    View Details
                                                </Link>
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 px-4 py-2 bg-white text-[#020617] rounded-lg hover:bg-slate-200 transition-all duration-300 text-sm font-bold flex items-center justify-center gap-2"
                                                >
                                                    Live
                                                </a>

                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </div>

                {/* Pagination with Prev & Next */}
                {!loading && totalPages > 1 && (
                    <div className="flex justify-center items-center gap-3 pt-8">
                        {/* Prev Button */}
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                            className={`px-4 h-10 rounded-xl font-bold text-sm transition-all duration-300 border flex items-center gap-1 ${currentPage === 1
                                ? "bg-slate-900/40 text-slate-600 border-white/5 cursor-not-allowed"
                                : "bg-slate-900/80 text-slate-300 border-white/10 hover:border-blue-500/50 hover:text-white"
                                }`}
                        >
                            Prev
                        </button>

                        {/* Page Numbers */}
                        {Array.from({ length: totalPages }, (_, index) => {
                            const pageNum = index + 1;
                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => setCurrentPage(pageNum)}
                                    className={`w-10 h-10 rounded-xl font-bold text-sm transition-all duration-300 border ${currentPage === pageNum
                                        ? "bg-blue-500 text-white border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                                        : "bg-slate-900/80 text-slate-400 border-white/10 hover:border-blue-500/50 hover:text-white"
                                        }`}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className={`px-4 h-10 rounded-xl font-bold text-sm transition-all duration-300 border flex items-center gap-1 ${currentPage === totalPages
                                ? "bg-slate-900/40 text-slate-600 border-white/5 cursor-not-allowed"
                                : "bg-slate-900/80 text-slate-300 border-white/10 hover:border-blue-500/50 hover:text-white"
                                }`}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;