"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
    FaExternalLinkAlt,
    FaGithub,
    FaArrowLeft,
    FaLayerGroup,
    FaMicrochip,
    FaExclamationTriangle,
    FaChartLine,
    FaCheckCircle,
    FaServer
} from "react-icons/fa";

const ProjectDetails = () => {
    const params = useParams();
    const id = params?.id;

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        fetch("/data/projects.json")
            .then((res) => res.json())
            .then((data) => {
                const foundProject = data.find((item) => String(item.id) === String(id));
                setProject(foundProject);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch project details:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="w-full bg-[#020617] min-h-screen flex items-center justify-center text-slate-400 text-lg font-medium">
                Loading project details...
            </div>
        );
    }

    if (!project) {
        return (
            <div className="w-full bg-[#020617] min-h-screen flex flex-col items-center justify-center text-slate-100 space-y-4 px-6">
                <h1 className="text-3xl font-bold">Project Not Found</h1>
                <p className="text-slate-400 text-sm">The project you are looking for does not exist or has been removed.</p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2"
                >
                    <FaArrowLeft className="w-4 h-4" />
                    <span>Back to Projects</span>
                </Link>
            </div>
        );
    }

    return (
        <section className="w-full bg-[#020617] min-h-screen py-24 px-6 flex flex-col items-center text-slate-100">
            <div className="max-w-5xl w-full space-y-10">

                

                {/* Project Title & Category Header */}
                <div className="space-y-3">
                    <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs">
                        {project.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                        {project.title}
                    </h1>
                </div>

                {/* Project Banner Image */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 shadow-2xl w-full h-[300px] md:h-[450px]">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Action Buttons (Live, Frontend Repo, Backend Repo) */}
                <div className="flex flex-wrap gap-4 pt-2">
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                        >
                            <FaExternalLinkAlt className="w-3.5 h-3.5" />
                            <span>Live Project</span>
                        </a>
                    )}

                    {project.repo && (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white border border-white/10 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2"
                        >
                            <FaGithub className="w-4 h-4" />
                            <span>Frontend Repo</span>
                        </a>
                    )}

                    {project.backendRepo && (
                        <a
                            href={project.backendRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 hover:border-blue-500/50"
                        >
                            <FaServer className="w-4 h-4 text-blue-500" />
                            <span>Backend Repo</span>
                        </a>
                    )}
                </div>

                {/* Detailed Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">

                    {/* Main Description & Tech Stack */}
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <FaLayerGroup className="w-5 h-5 text-blue-500" />
                                <span>Project Overview</span>
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-base">
                                {project.description}
                            </p>
                        </div>

                        {/* Challenges Faced */}
                        {project.challenges && project.challenges.length > 0 && (
                            <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <FaExclamationTriangle className="w-5 h-5 text-amber-500" />
                                    <span>Challenges Faced</span>
                                </h3>
                                <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                                    {project.challenges.map((challenge, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                                            <span>{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Future Improvements */}
                        {project.improvements && project.improvements.length > 0 && (
                            <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <FaChartLine className="w-5 h-5 text-emerald-500" />
                                    <span>Future Plans & Improvements</span>
                                </h3>
                                <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                                    {project.improvements.map((improvement, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <FaCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                            <span>{improvement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Information */}
                    <div className="space-y-6">
                        <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-6 space-y-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <FaMicrochip className="w-5 h-5 text-blue-500" />
                                <span>Core Tech Stack</span>
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags?.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-slate-800 text-blue-400 border border-white/5 rounded-lg text-xs font-semibold uppercase tracking-wider"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;