import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-[#020617] border-t border-white/5 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Copyright */}
                <div className="text-slate-400 text-sm font-medium">
                    © {new Date().getFullYear()} Mishu Debnath. All rights reserved.
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-8">
                    <a
                        href="https://github.com/devmishu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mishudeb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://www.facebook.com/devmishunath"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                    >
                        facebook
                    </a> 
                </div>

            </div>
        </footer>
    );
};

export default Footer;