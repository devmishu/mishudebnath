"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    // Blob shape animation values
    const blobAnimation = {
        borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 30% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
        },
    };

    return (
        <section className="relative w-full min-h-screen bg-[#020617] flex items-center justify-center pt-24 overflow-hidden">
            {/* Background: Radial Gradient and Floating Lights */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e293b_0%,#020617_70%)]" />

            {/* Out-of-focus background lights */}
            <motion.div
                animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"
            />
            <motion.div
                animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-600/10 blur-[100px] rounded-full"
            />

            <div className="max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">

                {/* Left Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col space-y-8"
                >
                    <motion.div variants={itemVariants} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-blue-500 rounded-full" />
                            <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs">Front-End Developer</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tighter">
                            Mishu <span className="text-blue-500">Debnath</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-slate-300 text-lg md:text-xl max-w-lg leading-relaxed font-medium"
                        variants={itemVariants}
                    >
                        Building high-performance, pixel-perfect interfaces that prioritize speed, aesthetics, and user experience.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        variants={itemVariants}
                    >
                        <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center gap-2 group z-50">

                            <a href="https://drive.google.com/uc?export=download&id=1sAuUSXvggBZZM44us1pbef6WIMCNJ3ed" download="Mishu_Devnath_CV.pdf">
                                Download Resume
                            </a>

                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                        <button className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-white font-bold rounded-2xl border border-white/10 transition-all backdrop-blur-md">
                            <a href="#contact">Get in Touch</a>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Content: Organic Blob with Animated Border */}
                <div className="relative flex justify-center items-center">
                    {/* Organic Animated Border Outline */}
                    <motion.div
                        className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] border-2 border-blue-500/30"
                        animate={blobAnimation}
                    />

                    {/* Inner Pulsing Border */}
                    <motion.div
                        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-2 border-blue-500/50"
                        animate={{
                            ...blobAnimation,
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />

                    {/* Image Container (The Blob) */}
                    <motion.div
                        className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] overflow-hidden bg-slate-800 shadow-2xl"
                        animate={blobAnimation}
                    >
                        <img
                            src="/assets/images/hero-banner.png"
                            alt="Mishu Debnath"
                            className="w-full h-full object-cover grayscale-[10%]"
                        />
                    </motion.div>

                    {/* Statistics - Orbital Positions */}




                    {/* 150 Finished Projects */}
                    {/* <motion.div
                        className="absolute -bottom-4 -right-4  bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-3 z-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                            <span className="text-emerald-500 font-bold text-lg">150</span>
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm leading-none">Finished</p>
                            <p className="text-slate-400 text-xs">Projects</p>
                        </div>
                    </motion.div> */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
