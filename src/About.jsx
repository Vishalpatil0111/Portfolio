import { useEffect, useRef } from 'react';
import Navbar from './assets/Navbar';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

function About() {
    const navigate = useNavigate();

    const nav = () => {
        navigate('/projects');
    };

    const hashe = [
        { label: '#Developer', color: 'bg-sky-400' },
        { label: '#Designer', color: 'bg-yellow-300' },
        { label: '#Freelancer', color: 'bg-red-300' }
    ];

    const educationData = [
        {
            degree: 'B.E in Computer Science',
            school: 'GES R.H. Sapat College of engineering',
            year: '2021 - 2024'
        },
        {
            degree: 'Higher Secondary',
            school: 'R.Y.K College of Science & Arts',
            year: '2019-2020'
        }
    ];

    const experienceData = [
        {
            role: 'Python API Developer Intern',
            company: 'Zabuza Labs',
            duration: 'Sep 2024 - Feb 2025'
        },
    ];

    const headingRef = useRef(null);
    const para1Ref = useRef(null);
    const para2Ref = useRef(null);
    const eduCardRef = useRef(null);
    const expCardRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(headingRef.current,
            { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
            { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1 })

            .fromTo(para1Ref.current,
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 1 }, "-=0.5")

            .fromTo(para2Ref.current,
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 1 }, "-=0.5")

            .fromTo(eduCardRef.current,
                { scaleY: 0, transformOrigin: 'top', opacity: 0 },
                { scaleY: 1, opacity: 1, duration: 1 }, "-=0.3")

            .fromTo(expCardRef.current,
                { scaleY: 0, transformOrigin: 'top', opacity: 0 },
                { scaleY: 1, opacity: 1, duration: 1 }, "-=0.8");
    }, []);

    return (
        <div className="w-full min-h-screen  text-white overflow-x-hidden relative">

            {/* Background image and overlay */}
            <div
                className="fixed top-0 left-0 right-0 h-full -z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/aboutbg.jpg')" }}
            />
            <div className="fixed inset-0 -z-10 bg-black opacity-80" />

            <div className="relative z-10  min-h-screen flex flex-col">
                <Navbar />

                <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4 py-10">
                    {/* Left Section */}
                    <div className="md:w-1/2 flex flex-col gap-6 bg-opacity-10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                        <h1
                            ref={headingRef}
                            className="text-3xl sm:text-5xl md:text-6xl font-bold glass-antiqua-regular text-white overflow-hidden"
                        >
                            About Me
                        </h1>

                        <p
                            ref={para1Ref}
                            className='tracking-wider text-base md:text-lg glass-antiqua-regular'
                        >
                            I'm Vishal Patil, a Computer Science graduate and passionate developer who loves building smart and useful web applications. I have hands-on experience with React, MongoDB, and Python, and I enjoy working on projects that combine web development with machine learning and AI.
                        </p>

                        <p
                            ref={para2Ref}
                            className='tracking-wider text-base md:text-lg glass-antiqua-regular'
                        >
                            I'm constantly learning and improving — especially in backend development with tools like Express.js and Flask. I’m excited about working in teams where I can grow, contribute, and apply my problem-solving mindset to real-world challenges.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {hashe.map((item, index) => (
                                <span
                                    key={index}
                                    className={`px-3 py-1 rounded-full text-black text-sm font-medium ${item.color}`}
                                >
                                    {item.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    
                    <div className="md:w-1/2  flex flex-col gap-6">
                      
                        <div
                            ref={eduCardRef}
                            className="  opacity-50 backdrop-blur-md p-6 rounded-2xl shadow-lg origin-top"
                        >
                            <h2 className="text-xl font-bold mb-4 border-b border-gray-500 pb-2">🎓 Education</h2>
                            <div className="space-y-4">
                                {educationData.map((edu, idx) => (
                                    <div key={idx}>
                                        <p className="font-semibold">{edu.degree}</p>
                                        <p className="text-sm text-gray-300">{edu.school}</p>
                                        <p className="text-xs text-gray-400">{edu.year}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            ref={expCardRef}
                            className="opacity-50 backdrop-blur-md p-6 rounded-2xl shadow-lg origin-top"
                        >
                            <h2 className="text-xl font-bold mb-4 border-b border-gray-500 pb-2">💼 Experience</h2>
                            <div className="space-y-4">
                                {experienceData.map((exp, idx) => (
                                    <div key={idx}>
                                        <p className="font-semibold">{exp.role}</p>
                                        <p className="text-sm text-gray-300">{exp.company}</p>
                                        <p className="text-xs text-gray-400">{exp.duration}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Button */}
                        <div className='flex justify-center items-center mt-4'>
                            <button
                                onClick={nav}
                                className='md:hidden w-full sm:w-60 py-3 bg-pink-300 text-black font-semibold rounded-lg hover:bg-pink-400 transition duration-300'
                            >
                                View Projects
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
