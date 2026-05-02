"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
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
        <section id="about" className="w-full bg-[#020617] py-24 px-6 flex flex-col items-center justify-center ">
            <div className="max-w-6xl w-full  ">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    

                    {/* Content Side */}
                    <motion.div variants={itemVariants} className="space-y-8 order-1 md:order-2 flex flex-col items-center">
                        <div className="space-y-4">
                            <p className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm text-center">Who I Am</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                                Delivering Business Value Through <span className="text-blue-500 italic">Code</span>
                            </h2>
                        </div>
                        
                        <div className="space-y-6">
                            <p className="text-xl text-slate-300 font-medium leading-relaxed italic border-l-4 border-blue-500 pl-6 py-2 bg-blue-500/5 rounded-r-2xl">
                                &quot;I don't just build websites; I build digital bridges that connect your business vision with your users' needs.&quot;
                            </p>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                As a dedicated Frontend Developer, I specialize in creating high-performance, pixel-perfect interfaces that prioritize both speed and aesthetics. My approach combines technical excellence with a deep understanding of user behavior to ensure every project delivers measurable results.
                            </p>
                        </div>

                        <motion.div variants={itemVariants} className="flex gap-4 pt-4">
                            {/* <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                Contact Me
                            </button> */}
                            <button className="px-8 py-3 bg-slate-900/80 hover:bg-slate-800 text-white font-bold rounded-2xl border border-white/10 transition-all backdrop-blur-md">
                               <a href="#skills"> My Skills</a>
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
