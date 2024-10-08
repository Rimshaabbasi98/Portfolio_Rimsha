import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMui } from 'react-icons/si';

const skillsData = [
    { name: 'HTML', percentage: 95, color: 'bg-red-600', icon: <FaHtml5 /> },
    { name: 'CSS', percentage: 95, color: 'bg-blue-600', icon: <FaCss3Alt /> },
    { name: 'JavaScript', percentage: 80, color: 'bg-yellow-500', icon: <FaJsSquare /> },
    { name: 'Tailwind CSS', percentage: 90, color: 'bg-cyan-400', icon: <SiTailwindcss /> },
    { name: 'React.js', percentage: 80, color: 'bg-blue-500', icon: <FaReact /> },
    { name: 'MongoDB', percentage: 80, color: 'bg-green-600', icon: <FaDatabase /> },
    { name: 'MUI', percentage: 90, color: 'bg-purple-600', icon: <SiMui /> },
];

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="w-full h-auto md:h-screen bg-gray-200 py-12 lg:py-24"
        >
            <div className="container mx-auto px-4 w-[80%] md:w-4/5">
                <h2 className="text-4xl font-bold text-center mb-10">
                    My Skills
                    <span className="block h-1 w-24 bg-sky-400 mt-2 mx-auto rounded"></span>
                </h2>

                {skillsData.map((skill, index) => (
                    <div key={index} className="mb-8 flex flex-col md:flex-row items-center justify-between">
                        <h4 className="text-3xl mb-2 flex items-center">
                            <span className={`mr-2 p-4 rounded-2xl text-4xl ${skill.color}`}>{skill.icon}</span>
                            {skill.name}
                        </h4>
                        <div className="flex-grow mx-4 w-full">
                            <div className="w-full bg-gray-300 rounded-full h-3">
                                <motion.div
                                    className={`${skill.color} h-3 rounded-full`}
                                    initial={{ width: '0%' }}
                                    animate={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
                                    transition={{ duration: 1.5, ease: 'easeOut' }}
                                />
                            </div>
                        </div>
                        <p className="text-lg mt-2 md:mt-0">{skill.percentage}%</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
