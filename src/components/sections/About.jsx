import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const About = () => {
    const frontendSkills = ['React', 'TailwindCSS', 'HTML', 'JavaScript'];

    const gameDevSkills = ['C#', 'Unity', 'Blender', 'Substance Painter'];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2
                        className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-red-400 
                bg-clip-text text-transparent text-center"
                    >
                        About Me
                    </h2>

                    <div
                        className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 
                transition-all"
                    >
                        <p className="text-gray-300 mg-6">
                            Desire to develop in the field of programming and
                            create high-quality software products for the
                            subsequent creation of a solution with ready-made
                            functionality.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded=xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                    rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8_px_rgba(59, 130, 246, 0.2] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded=xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Gamedev
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {gameDevSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                    rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8_px_rgba(59, 130, 2246, 0.2] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div
                            className="p-6 rounded-xl border-while/10 border hover:-translate-y-1 
                    transition-all"
                        >
                            <h3 className="text-xl font-bold mb-4">
                                Education
                            </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>B.S. in Mining Engineering</strong>{' '}
                                    - Belarusian National Technical University
                                    (2015-2020)
                                </li>
                                <li>Teachmeskills: Unity-developer</li>
                            </ul>
                        </div>
                        <div
                            className="p-6 rounded-xl border-while/10 border hover:-translate-y-1 
                    transition-all"
                        >
                            <h3 className="text-xl font-bold mb-4">
                                Work Experience
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                        Mechanical Engineer (2023 - 2025)
                                    </h4>
                                    <p>
                                        Organization and control of
                                        uninterrupted and stable operation of
                                        equipment, devices and instruments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default About;
