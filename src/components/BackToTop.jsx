"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={scrollToTop}
                    // থিমের সাথে মিলিয়ে ডার্ক গ্লাস ইফেক্ট এবং ব্লু বর্ডার ব্যবহার করা হয়েছে
                    className="fixed bottom-8 right-8 z-50 p-4 bg-slate-900/60 backdrop-blur-md text-blue-500 border border-blue-500/30 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-500 group cursor-pointer"
                >
                    <svg
                        className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;