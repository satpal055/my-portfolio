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
        <>
            {/* Skills */}
            <section id="skills" className="max-w-6xl mx-auto px-6 py-10">
                <h3 className="text-3xl font-bold text-center">Technical Skills & Expertise</h3>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-slate-900 p-5 rounded-2xl text-center shadow-lg hover:scale-105 transition flex flex-col items-center gap-2"
                        >
                            {skill.icon}
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
