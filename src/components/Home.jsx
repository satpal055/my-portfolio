import React from 'react'
import avatar1 from '../assets/image/avatar1.png'
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

                {/* TEXT */}
                <div className="space-y-6 animate-fadeIn">
                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
                        Hi, I Am{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                            <Typewriter
                                words={["Satpal Singh"]}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={80}
                                deleteSpeed={50}
                            />
                        </span>
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                        A UI-focused React Developer with 4+ years of design expertise.
                        I build modern, fast, and user-centric websites that bring together
                        clean visuals and powerful functionality.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4">
                        <a
                            href="#projects"
                            className="px-7 py-3 bg-cyan-500 text-black rounded-2xl font-semibold 
                            shadow-lg hover:shadow-cyan-500/40 hover:bg-cyan-400 transition-all duration-300"
                        >
                            View Projects
                        </a>

                        <a
                            href="https://drive.google.com/file/d/1hUo_5gP_WoYdggXqcfXHiAc9NmuHtJ3p/view?usp=sharing"
                            className="px-7 py-3 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold 
                            hover:bg-cyan-500 hover:text-black shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* IMAGE */}
                <div className="flex justify-center relative animate-fadeIn delay-200">
                    <div className="absolute -inset-4 bg-cyan-500/20 rounded-3xl blur-3xl"></div>

                    <img
                        src={avatar1}
                        alt="Profile"
                        className="w-80 h-80 object-cover rounded-3xl shadow-2xl 
                        hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </section>
        </div>
    )
}
