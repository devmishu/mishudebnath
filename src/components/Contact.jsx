"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs
            .sendForm(
                "service_fnpyxjx",
                "template_p0802kp",
                form.current,
                "7liQva7b9HzGW1sgq"
            )
            .then(
                () => {
                    setStatus("success");
                    e.target.reset(); 
                    
                    setTimeout(() => setStatus(""), 5000);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    setStatus("error");
                }
            );
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="contact" className="w-full bg-background py-24 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Contact Info */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight"
                    >
                        Let’s build something <span className="text-blue-500">extraordinary</span>.
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-slate-300 text-lg max-w-xl"
                    >
                        I’m currently available for freelance projects or full-time opportunities.
                        Have a project in mind or just want to say hi? Feel free to reach out!
                    </motion.p>

                    <motion.div variants={itemVariants} className="space-y-6 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Email Me</p>
                                <p className="text-slate-100 font-medium">mishudebnath926@gmail.com</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-[40px] border border-white/10 shadow-2xl relative overflow-hidden group"
                >
                    <form ref={form} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-slate-400 text-sm font-medium">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    name="user_name" // আপনার EmailJS টেমপ্লেটে এই নামটি ব্যবহার করুন
                                    className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 outline-none p-4 rounded-2xl text-slate-100 transition-all shadow-sm"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-slate-400 text-sm font-medium">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    name="user_email" // আপনার EmailJS টেমপ্লেটে এই নামটি ব্যবহার করুন
                                    className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 outline-none p-4 rounded-2xl text-slate-100 transition-all shadow-sm"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-slate-400 text-sm font-medium">Message</label>
                            <textarea
                                required
                                name="message" // আপনার EmailJS টেমপ্লেটে এই নামটি ব্যবহার করুন
                                className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 outline-none p-4 rounded-2xl text-slate-100 transition-all resize-none shadow-sm h-32"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-700 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] disabled:shadow-none hover:cursor-pointer"
                        >
                            {status === "sending" ? "Sending..." : "Send Message"}
                        </button>

                        {status === "success" && <p className="text-emerald-400 text-center text-sm font-medium mt-4">Message sent successfully!</p>}
                        {status === "error" && <p className="text-red-400 text-center text-sm font-medium mt-4">Failed to send message. Please try again.</p>}
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;