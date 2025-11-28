import React, { useState } from 'react';
import { Menu, X } from "lucide-react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
                {/* Logo */}
                <h1 className="text-xl font-bold text-cyan-400">My PortFolio</h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <a href="#about" className="hover:text-cyan-400">About</a>
                    <a href="#skills" className="hover:text-cyan-400">Skills</a>
                    <a href="#projects" className="hover:text-cyan-400">Projects</a>
                    <a href="#contact" className="hover:text-cyan-400">Contact</a>

                </div>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-cyan-400 focus:outline-none"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-4 space-y-4 text-center border-t border-white/10">
                    <a
                        href="#about"
                        className="block hover:text-cyan-400"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        className="block hover:text-cyan-400"
                        onClick={() => setIsOpen(false)}
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="block hover:text-cyan-400"
                        onClick={() => setIsOpen(false)}
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="block hover:text-cyan-400"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </a>
                </div>
            )}
        </>
    );
}
