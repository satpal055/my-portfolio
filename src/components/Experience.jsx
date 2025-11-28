import React from "react";

export default function Experience() {
    return (
        <section id="experience" className="max-w-7xl mx-auto px-6 py-10">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400">
                Experience
            </h2>

            {/* Timeline Container */}
            <div className="relative mt-12">
                {/* Vertical line */}
                <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-cyan-400/20 -translate-x-1/2"></div>
                <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
                    <div className="order-2 md:order-1 bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <p className="text-gray-300 leading-relaxed">
                            Transitioned into frontend development to create interactive, high-performance web applications. I work with React.js, Tailwind CSS, and modern JavaScript to deliver responsive, visually appealing interfaces, while leveraging my prior design experience to enhance user experience and UI consistency.

                        </p>
                    </div>

                    <div className="order-1 md:order-2">
                        <h3 className="text-xl font-semibold text-white">
                            Frontend Developer
                        </h3>
                        <p className="text-cyan-400">kuchoriya techsoft  , Jaipur</p>
                        <p className="text-sm text-gray-400">  Sep 2025 - Present</p>
                    </div>
                </div>


                {/* Experience Item 1 */}
                <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
                    <div className="md:text-right">
                        <h3 className="text-xl font-semibold text-white">
                            Web Designer
                        </h3>
                        <p className="text-cyan-400">Serverwala , Jaipur</p>
                        <p className="text-sm text-gray-400">Nov 2022 - Sep 2025</p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <p className="text-gray-300 leading-relaxed">
                            I played a key role in enhancing Serverwala’s web identity by designing clean, fast, and customer-focused interfaces. My work included creating landing pages, product pages, and marketing visuals using HTML, CSS, Tailwind,Wordpress,Figma, Bootstrap, and Photoshop,
                            ensuring strong aesthetics, responsiveness, and conversion-driven design.
                        </p>
                    </div>
                </div>

                {/* Experience Item 2 */}
                <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
                    <div className="order-2 md:order-1 bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <p className="text-gray-300 leading-relaxed">
                            At W3SpeedUp, I designed clean, responsive, and high-performance web interfaces for clients across multiple industries. My role involved creating user-friendly layouts, optimizing UI for speed, and delivering pixel-perfect designs using HTML,Wordpress ,  CSS, Bootstrap, Photoshop, and Tailwind CSS. I collaborated closely
                            with developers to ensure smooth implementation and consistent brand experiences.
                        </p>
                    </div>

                    <div className="order-1 md:order-2">
                        <h3 className="text-xl font-semibold text-white">
                            Web Designer
                        </h3>
                        <p className="text-cyan-400">W3SpeedUp ,  Jaipur</p>
                        <p className="text-sm text-gray-400">  July 2021 – November 2022</p>
                    </div>
                </div>


            </div>
        </section>
    );
}
