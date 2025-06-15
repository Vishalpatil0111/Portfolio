import { useEffect, useRef, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import gsap from 'gsap';






const projectData = [
  {
    title: "Lung Disease Prediction Dashboard",
    description: "AI-powered Flask & React dashboard that predicts pulmonary disease using SHAP explainability.",
    tech: ["React", "Flask", "SHAP", "SMOTE", "RandomForest", "ML"],
    image: "/project1.jpg",
    tags: ["AI/ML", "Web"],
    github: "https://github.com/Vishalpatil0111/LungsDiseaseDashboard/tree/main",
    
  },
  {
    title: "Comment Toxic Detection",
    description: "Machine learning model developed in Python to detect toxic comments using NLP techniques.",
    tech: ["Python", "Opencv", "ML"],
    tags: ["AI/ML"],
    image: "/project2.jpg",
    github: "https://github.com/Vishalpatil0111/comment_Toxicity_Model",
    

  },
  {
    title: "Sneakerflare - E-commerce website",
    description: "Sleek and animated UI for a sneaker e-commerce store built with React, GSAP, TailwindCSS, and Framer Motion",
    tech: ["React", "TailwindCSS", "GSAP","Framer"],
    tags: ["Web"],
    image: "/project3.png",
    github: "https://github.com/Vishalpatil0111/ShoesFlare",
    demo: "https://sneakerflare.vercel.app/"
  },
  {
     title: "BrewBella -  Coffee Shop Webiste",
    description: "Aesthetic and responsive coffee shop website designed with React, GSAP animations, and Tailw",
    tech: ["React", "TailwindCSS", "GSAP"],
    tags: ["Web"],
    image: "/project4.jpg",
    github: "https://github.com/Vishalpatil0111/brewbella",
    demo: "https://brewbella.vercel.app/"
  },
  {
     title: "Mini Zomato Dashboard",
    description: "Interactive food delivery analytics dashboard built using Power BI, SQL, and Python for data insights.",
    tech: ["Python", "PowerBi", "SQL"],
    tags: ["AI/ML"],
    image: "/zomato.webp",
    github: "https://github.com/Vishalpatil0111/Zomato_Dashboard",
    
  }

];

function Projectsgrid() {
  const tags = ['All', 'AI/ML', 'Web'];
  const [activeTag, setActiveTag] = useState('All');

  const filteredProjects = activeTag === 'All'
    ? projectData
    : projectData.filter(proj => proj.tags.includes(activeTag));
  const cardsRef = useRef([]);
  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      }
    );
  }, [filteredProjects]);



  return (
    <section className="bg-black/90 opacity-70 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center uppercase">Projects</h2>
        <div className="flex justify-center mb-8 flex-wrap gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2  border ${activeTag === tag ? 'bg-blue-400 text-black' : 'bg-zinc-700 text-white'
                } hover:bg-pink-300 transition-all`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {filteredProjects.map((proj, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}

              className="bg-zinc-800 overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-sm mb-3 text-gray-300">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {proj.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-zinc-700 text-sm "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-xl hover:text-pink-400" />
                    </a>
                  )}
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt className="text-xl hover:text-pink-400" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projectsgrid;
