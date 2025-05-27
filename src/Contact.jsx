import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import gsap from "gsap";
import Navbar from "./assets/Navbar";

function Contact() {
    const cardsRef = useRef([]);

    const contacts = [
        {
            label: "Email",
            icon: <FaEnvelope size={28} />,
            link: "mailto:vishall.patil0111@gmail.com",
            bg: "bg-rose-400"
        },
        {
            label: "LinkedIn",
            icon: <FaLinkedin size={28} />,
            link: "https://www.linkedin.com/in/vishalpatil0111/",
            bg: "bg-blue-500"
        },
        {
            label: "GitHub",
            icon: <FaGithub size={28} />,
            link: "https://github.com/Vishalpatil0111",
            bg: "bg-zinc-500"
        },

    ];
    const nameRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(nameRef.current, {
            scale: 0.8,
            y: -100,
            opacity: 0,
        }, {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'bounce.out',
            delay: 0.5,
        });
        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 40, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.2,
            }
        );

    }, []);


    return (
        <div className=' relative w-full h-screen bg-yellow-300'>

            <div
                className='absolute top-0 left-0 w-full h-full z-0'
                style={{
                    backgroundImage: "url('/cbg.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10'></div>
            <div className='relative z-20 w-full h-full sm:p-2 flex flex-col'>
                <Navbar />
                <div className='w-full h-full flex flex-row sm:gap-3 items-center text-white'>



                    <div className='w-full h-fit flex flex-col gap-3 p-5 sm:p-2'>
                        <h1
                            ref={nameRef}
                            className=' text-7xl md:text-6xl font-bold glass-antiqua-regular mt-1 '
                        >
                            Contact Me
                        </h1>

                        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 opacity-60  ">
                            {contacts.map((contact, index) => (
                                <a
                                    key={index}
                                    href={contact.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className={`flex items-center gap-4 p-4 sm:p-6 rounded-2xl shadow-xl ${contact.bg} text-black hover:scale-105 transform transition duration-300`}
                                >
                                    <div className="text-white">{contact.icon}</div>
                                    <div className="text-lg font-semibold">{contact.label}</div>
                                </a>
                            ))}
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )

}

export default Contact;
