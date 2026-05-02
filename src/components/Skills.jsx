"use client";
import React from "react";
import { motion } from "framer-motion";

const FrontendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ToolsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="w-full bg-[#020617] py-24 px-6 flex flex-col items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl w-full space-y-16"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <p className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Skills & Tools</h2>
          {/* <p className="text-slate-400 text-lg max-w-xl mx-auto">Precision instruments for modern web development.</p> */}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Frontend Core */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-900/80 p-8 rounded-[32px] border border-white/10 shadow-xl backdrop-blur-md hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <FrontendIcon />
              </div>
              <h3 className="text-xl font-bold text-white">Frontend Core</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {["HTML","CSS","React.js", "JabaScript", "Next.js", "Tailwind CSS","Daisy UI","Hero UI",].map((skill) => (
                <motion.div
                  key={skill}
                  variants={chipVariants}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-white/5 hover:border-blue-500/30 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium text-slate-100">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: DevOps & Tools */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-900/80 p-8 rounded-[32px] border border-white/10 shadow-xl backdrop-blur-md hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <ToolsIcon />
              </div>
              <h3 className="text-xl font-bold text-white">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {["VS Code", "Git", "GitHub", "Figma"].map((tool) => (
                <motion.div
                  key={tool}
                  variants={chipVariants}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-white/5 hover:border-emerald-500/30 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-sm font-medium text-slate-100">{tool}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
