import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import gsap from "gsap";
import Navbar from "./assets/Navbar";

const Contact = () => {
  const cardRefs = useRef([]);
  const titleRef = useRef(null);

  const contacts = [
    {
      label: "Email",
      icon: <FaEnvelope size={26} />,
      link: "mailto:vishall.patil0111@gmail.com",
      bg: "bg-rose-500/20 backdrop-blur-md border border-rose-300/40"
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin size={26} />,
      link: "https://www.linkedin.com/in/vishalpatil0111/",
      bg: "bg-blue-500/20 backdrop-blur-md border border-blue-300/40"
    },
    {
      label: "GitHub",
      icon: <FaGithub size={26} />,
      link: "https://github.com/Vishalpatil0111",
      bg: "bg-zinc-500/20 backdrop-blur-md border border-zinc-300/40"
    },
    {
      label: "Twitter",
      icon: <FaTwitter size={26} />,
      link: "https://twitter.com",
      bg: "bg-cyan-500/20 backdrop-blur-md border border-cyan-300/40"
    }
  ];

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3
      }
    );

    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2
      }
    );
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/cbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10" />

      <div className="relative z-20 ">
        <Navbar />
        <div className="mt-16 flex flex-col items-center text-center">
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold tracking-wide mb-10 glass-antiqua-regular"
          >
            Let's Connect
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6 gap-6 w-full max-w-5xl">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (cardRefs.current[index] = el)}
                className={`rounded-xl px-6 py-6 flex flex-col justify-center items-center hover:scale-[1.05] transform transition duration-300 ${contact.bg}`}
              >
                <div className="text-white mb-2">{contact.icon}</div>
                <p className="font-semibold text-lg">{contact.label}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
