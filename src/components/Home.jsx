import React from 'react'
import avatar1 from '../assets/image/avatar1.png'
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Hi, I Am{" "}
                        <span className="text-cyan-400">
                            <Typewriter
                                words={["Satpal Singh"]}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={100}
                                deleteSpeed={50}
                            />
                        </span>
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg">
                        A UI-focused React Developer. With 4 years in design and a strong front-end skillset, I build fast, elegant and user-centered web applications that blend design clarity with technical precision.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <a href="#projects" className="px-6 py-3 bg-cyan-500 text-black rounded-2xl font-semibold hover:bg-cyan-400 transition">View Projects</a>
                        <a href="https://drive.google.com/file/d/1hUo_5gP_WoYdggXqcfXHiAc9NmuHtJ3p/view?usp=sharing" className="px-6 py-3 border border-cyan-500 rounded-2xl hover:bg-cyan-500 hover:text-black transition">Download CV</a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src={avatar1}
                        alt="Profile"
                        className="w-72 h-72 object-cover rounded-3xl shadow-2xl"
                    />
                </div>
            </section>
        </div>
    )
}
