import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Footer from "./Footer";
import Experience from "./Experience";
import Contact from "./Contact";

export default function Portfolio() {
    return (
        <div className="bg-slate-950 text-white min-h-screen font-sans">

            <Navbar />
            <Home />

            <About />
            <Experience />

            <Skills />

            <Project />

            <Contact />



            <Footer />
        </div>
    );
}
