import React, { useState, useEffect, useRef } from 'react';
import { IoMusicalNotesSharp } from "react-icons/io5";
import { AiFillPauseCircle } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

function page() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleSound = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch((e) => console.log("Playback error:", e));
            setIsPlaying(true);
        }
    };

    // Refs for animations
    const iconsRef = useRef([]);
    const nameRef = useRef(null);
    const introRef = useRef(null);
    const buttonRef = useRef(null);
    const helloRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(helloRef.current, {
            x: -50,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
        });

        gsap.fromTo(nameRef.current, {
            scale: 0.8,
            y: 100,
            opacity: 0,
        }, {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'bounce.out',
            delay: 0.5,
        });

        gsap.fromTo(introRef.current, {
            opacity: 0,
            y: 20,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 1.3,
            ease: 'power2.out',
        });

        gsap.fromTo(buttonRef.current, {
            opacity: 0,
            y: 20,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 2,
        });

        gsap.fromTo(iconsRef.current, {
            y: -20,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            delay: 1.5,
        });
    }, []);

    return (
        <div className=' relative w-full h-screen '>
            <audio ref={audioRef} src="/audio.mp3" preload="auto" />
            <div
                className='absolute top-0 left-0 w-full h-full z-0'
                style={{
                    backgroundImage: "url('/bg.gif')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10'></div>
            <div className='relative z-20 w-full h-full sm:p-2 flex flex-col'>
                <Navbar />
                <div className='w-full h-full flex flex-row sm:gap-3 items-center text-white'>
                  
                    <div className= 'w-16 md:w-30 h-full flex items-center'>
                        <div className='w-full h-fit flex flex-col items-center justify-center gap-3'>
                            {[FaLinkedin, FaGithub, BiLogoGmail].map((Icon, index) => (
                                <a
                                    key={index}
                                    href={
                                        index === 0
                                            ? "https://www.linkedin.com/in/vishalpatil0111/"
                                            : index === 1
                                                ? "https://github.com/Vishalpatil0111"
                                                : "mailto:vishall.patil0111@gmail.com"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    ref={(el) => (iconsRef.current[index] = el)}
                                    className="text-2xl hover:text-green-500 transition-all ease-in-out duration-300"
                                >
                                    <Icon />
                                </a>
                            ))}

                            <button
                                onClick={toggleSound}
                                className='mt-5 text-green-500 text-2xl p-2 rounded-full hover:bg-zinc-200 hover:text-zinc-800 transition-all'
                            >
                                {isPlaying ? <AiFillPauseCircle /> : <IoMusicalNotesSharp />}
                            </button>
                        </div>
                    </div>

                
                    <div className='w-full h-fit flex flex-col md:gap-6'>
                        <h1
                            ref={helloRef}
                            className='text-2xl glass-antiqua-regular'
                        >
                            Hello, I am
                        </h1>

                        <h1
                            ref={nameRef}
                            className='uppercase text-7xl md:text-8xl font-bold glass-antiqua-regular mt-5 sm:mt-2'
                        >
                            Vishal Patil
                        </h1>

                        <div
                            ref={introRef}
                            className='w-full mt-5 sm:mt-3 md:mt-0 sm:w-1/2 h-full glass-antiqua-regular'
                        >
                            <p className='tracking-wider md:text-lg'>
                                I craft intelligent, scalable web apps using React, Node.js, Python, and AI.
                                Passionate about solving real-world problems through data, automation, and intuitive design.
                            </p>
                        </div>

                        <Link
                            ref={buttonRef}
                            to="/about"
                            className="hover:text-black-400 px-3 py-1 mt-4 sm:mt-0 w-fit h-fit poppins bg-gray-500 text-white transition-all md:hidden"
                        >
                            About Me
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default page
