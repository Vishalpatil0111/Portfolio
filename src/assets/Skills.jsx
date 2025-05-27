
import { useEffect, useRef } from 'react';
import { FaReact, FaPython, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiJavascript, SiExpress, SiFlask, SiTensorflow, SiScikitlearn, SiSnowflake  } from 'react-icons/si';

import gsap from 'gsap';

const skills = [
    { icon: <FaReact size={35} className="text-cyan-400" />, label: 'React' },
    { icon: <SiJavascript size={35} className="text-yellow-300" />, label: 'JavaScript' },
    { icon: <FaPython size={35} className="text-blue-400" />, label: 'Python' },
    { icon: <SiTensorflow size={35} className="text-yellow-400" />, label: 'Tensorflow' },
    { icon: <SiScikitlearn size={35} className="text-orange-400" />, label: 'Scikit-learn' },   
    { icon: <FaNodeJs size={35} className="text-green-500" />, label: 'Node.js' },
    { icon: <SiFlask size={35} className="text-gray-300" />, label: 'Flask' },
    { icon: <SiMongodb size={35} className="text-green-400" />, label: 'MongoDB' },
    { icon: <SiSnowflake  size={35} className="text-blue-400" />, label: 'Snowflake' },
    { icon: <SiTailwindcss size={35} className="text-sky-400" />, label: 'Tailwind CSS' },
    { icon: <FaHtml5 size={35} className="text-orange-500" />, label: 'HTML5' },
    { icon: <FaGithub size={35} className="text-white" />, label: 'GitHub' }
];

function Skills() {
    const skillsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            skillsRef.current,
            {
                y: 50,
                opacity: 0,
                scale: 0.9
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out'
            }
        );
    }, []);

    return (
        <section className="py-16 px-6 bg-black/90 opacity-60 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center uppercase tracking-wide">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            ref={el => skillsRef.current[index] = el}
                            className="flex flex-col items-center justify-center bg-zinc-800 p-4 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md"
                        >
                            {skill.icon}
                            <p className="mt-2 text-sm font-medium">{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
