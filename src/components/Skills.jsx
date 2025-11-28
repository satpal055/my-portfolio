import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaWordpress, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiAdobephotoshop } from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
        { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-300" /> },
        { name: "Bootstrap", icon: <FaBootstrap size={40} className="text-purple-500" /> },
        { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" /> },
        { name: "Photoshop", icon: <SiAdobephotoshop size={40} className="text-blue-300" /> },
        { name: "WordPress", icon: <FaWordpress size={40} className="text-blue-500" /> },
    ];

    return (
        <section id="skills" className="relative max-w-7xl mx-auto px-6 py-20 overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute -top-10 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 -right-16 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <h3 className="relative text-3xl md:text-4xl font-bold text-center text-cyan-400 drop-shadow-lg">
                Technical Skills & Expertise
            </h3>
            <p className="relative text-gray-400 text-center max-w-2xl mx-auto mt-4">
                A blend of tools and technologies I use to build modern, responsive digital experiences.
            </p>

            {/* Skills Grid */}
            <div className="relative mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-lg flex flex-col items-center gap-3 hover:scale-110 hover:shadow-xl transition duration-300 hover:bg-white/20"
                    >
                        <div className="p-4 rounded-full bg-black/20 shadow-inner">
                            {skill.icon}
                        </div>
                        <p className="text-gray-200 text-md font-medium">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}