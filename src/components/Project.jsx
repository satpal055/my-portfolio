import React from 'react';
import wordpres_projct from '../assets/image/wordpres_projct.png'
import bootstrap_projct from '../assets/image/bootstrap_projct.png'
import task_manag from '../assets/image/task_manag.png'

export default function Project() {
    const projects = [
        {
            id: 1,
            title: "Wordpress  Website",
            projectTitle: "Sarvoham – Animal Rescue Organization ",
            description: "Designed and developed a modern, responsive WordPress website with a clean UI and smooth user experience. Customized themes, integrated plugins, improved site speed, and ensured mobile responsiveness.",
            image: wordpres_projct,
            link: "https://sarvoham.org/",
            tech: ["HTML", "CSS", "WordPress", "Photoshop"]
        },
        {
            id: 2,
            title: "Bootstrap Project",
            projectTitle: "Hostbillo – Web Hosting Service",
            description: " Designed in Figma and built using Bootstrap. Includes pricing plans, hosting features, and responsive UI optimized for conversions.",
            image: bootstrap_projct,
            link: " www.hostbillo.com",
            tech: ["Figma", "HTML", "CSS", "Bootstrap"]
        },
        {
            id: 3,
            title: "React Project",
            projectTitle: "Task Managment ",
            description: "I developed a React-based web application locally, implementing a modern, component-driven architecture to ensure scalability and maintainability. After completing the project, I deployed the code to GitHub",
            image: task_manag,
            link: "https://example.com",
            tech: ["React", "Tailwind", "GitHub"]
        }
    ];

    return (
        <div>
            {/* Projects */}
            <section id="projects" className="max-w-7xl mx-auto px-6 py-10">
                <h3 className="text-3xl font-bold text-center">Projects</h3>
                <p className='text-gray-400 mt-4 text-lg font-semibold text-center'>A showcase of the projects I have worked on, highlighting my skills<br />  and experience in various technologies</p>
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-slate-900 rounded-3xl p-4 border shadow-xl hover:-translate-y-2 transition"
                        >
                            <div className="h-100 bg-slate-800 rounded-2xl mb-4">
                                <img
                                    src={project.image}
                                    className='w-full  h-100 object-cover rounded-2xl'
                                    alt={project.title}
                                />
                            </div>

                            <h4 className="text-xl font-semibold">{project.title}</h4>
                            <a href={project.link} className="text-sm text-cyan-400 font-semibold" >{project.link}</a>
                            <p className="text-gray-400 mt-2"><b>{project.projectTitle}</b></p>
                            <p className="text-gray-400 mt-2">{project.description}</p>

                            {/* Tech */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.tech.map((item, index) => (
                                    <span
                                        key={index}
                                        className="text-sm bg-slate-700 px-3 py-1 rounded-full"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>


            </section>
        </div>
    )
}
