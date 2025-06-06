import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiJsonwebtokens,
  SiGithub,
} from "react-icons/si";

import spaceTourismImg from "../assets/space-tourism.png";
import devDashImg from "../assets/dev-dash.png";
import weatherAppImg from "../assets/weather-app.png";
import fluentwaveImg from "../assets/fluentwave.png";
import jobTrackerImg from "../assets/job-tracker.png";
import calculatorImg from "../assets/calculator-app.png";

type Project = {
  id: number;
  name: string;
  image: string;
  description: string;
  github: string;
  live: string;
  stack: {
    name: string;
    icon: React.ReactNode;
  }[];
};

const projects: Project[] = [
  {
    id: 1,
    name: "Space Tourism Website",
    image: spaceTourismImg,
    description: `
A multi-page website simulating a futuristic space tourism brand.

🚀 What it does: Provides destination info, crew bios, and vehicle pages using animated tab-based navigation and responsive layouts.

🎯 Problem it solves: Mimics a real-world product site to demonstrate advanced UI fidelity and responsive design.

🧩 My role: Sole developer — handled layout design, accessibility, React routing, and animation logic.

💡 Technical highlights: Pixel-perfect Tailwind styling, accessible tab interfaces, mobile-first design with smooth transitions.
    `.trim(),
    github: "https://github.com/Gideon-Cameron/Space-Tourism",
    live: "https://space-tourism-main1.netlify.app/",
    stack: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "React", icon: <SiReact className="text-sky-400" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    ],
  },
  {
    id: 2,
    name: "Dev Dash",
    image: devDashImg,
    description: `
A customizable developer dashboard combining GitHub stats, quotes, and personal widgets.

🚀 What it does: Displays user GitHub metrics, dynamic quotes, and remembers UI preferences between sessions.

🎯 Problem it solves: Helps developers stay inspired and track progress in a unified, visually appealing tool.

🧩 My role: Built every feature — from REST API integration and theming logic to UX layout and state management.

💡 Technical highlights: GitHub REST API integration, global theming, persistence with localStorage, modular React components.
    `.trim(),
    github: "https://github.com/Gideon-Cameron/Dev-Dash",
    live: "https://dev-dash-gc.netlify.app/",
    stack: [
      { name: "React", icon: <SiReact className="text-sky-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "GitHub API", icon: <SiGithub className="text-gray-300" /> },
    ],
  },
  {
    id: 3,
    name: "React Weather App",
    image: weatherAppImg,
    description: `
A real-time weather app using the OpenWeather API.

🚀 What it does: Lets users search cities and view live weather data — temperature, humidity, wind speed, and more.

🎯 Problem it solves: Offers instant access to weather with simple UI and fallback handling for edge cases.

🧩 My role: Developed API integration, UI state transitions, loading/error handling, and responsive layout.

💡 Technical highlights: OpenWeather API, responsive grid, dynamic icons, input validation.
    `.trim(),
    github: "https://github.com/Gideon-Cameron/React-Weather-App",
    live: "https://weather-app-xy.netlify.app/",
    stack: [
      { name: "React", icon: <SiReact className="text-sky-400" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    ],
  },
  {
    id: 4,
    name: "Fluentwave Beta",
    image: fluentwaveImg,
    description: `
A gamified language learning platform built as a full-stack web app.

🚀 What it does: Lets users log in, take quizzes, earn XP, and track progress through a dynamic dashboard.

🎯 Problem it solves: Makes language learning more engaging with gamified features and secure account management.

🧩 My role: Full-stack developer — built backend, REST APIs, JWT auth, protected routes, and frontend UI/UX.

💡 Technical highlights: MERN stack, JWT authentication, protected routes, real-time score tracking.
    `.trim(),
    github: "https://github.com/Gideon-Cameron/Fluentwave-beta",
    live: "https://fluentwave-beta.netlify.app/",
    stack: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-200" /> },
      { name: "React", icon: <SiReact className="text-sky-400" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-yellow-500" /> },
    ],
  },
  {
    id: 5,
    name: "Job Tracker",
    image: jobTrackerImg,
    description: `
A drag-and-drop Kanban board for managing job applications.

🚀 What it does: Lets users move job cards between stages like 'Applied', 'Interviewing', and 'Offer'.

🎯 Problem it solves: Keeps job seekers visually organized with persistent drag-and-drop state.

🧩 My role: Implemented full UI logic, styled interaction feedback, and component state reuse.

💡 Technical highlights: Drag-and-drop interaction, React component structure, localStorage persistence.
    `.trim(),
    github: "https://github.com/Gideon-Cameron/Job-Tracker",
    live: "https://job-trackerz.netlify.app/",
    stack: [
      { name: "React", icon: <SiReact className="text-sky-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    ],
  },
  {
    id: 6,
    name: "Calculator App",
    image: calculatorImg,
    description: `
A clean, responsive calculator with keyboard input and theming.

🚀 What it does: Offers full arithmetic calculations with light/dark theming and keyboard shortcuts.

🎯 Problem it solves: Demonstrates thoughtful UI design and precise logic control.

🧩 My role: Built layout, key binding logic, display formatting, and mobile responsiveness.

💡 Technical highlights: Keyboard event handling, conditional theming, separation of UI/logic.
    `.trim(),
    github: "https://github.com/Gideon-Cameron/Calculator-app",
    live: "https://calculator-app-xl.netlify.app/",
    stack: [
      { name: "React", icon: <SiReact className="text-sky-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    ],
  },
];


  
const oneLiners: Record<number, string> = {
    1: "A slick multi-page website mimicking a luxury space travel company.",
    2: "Your all-in-one productivity dashboard tailored for developers.",
    3: "Check the weather anywhere with real-time updates and dynamic visuals.",
    4: "Gamified language learning powered by full-stack tech.",
    5: "Organize your job hunt with an intuitive Kanban board system.",
    6: "A clean, responsive calculator with keyboard support and theming.",
  };
  
  const Projects = () => {
    const [selected, setSelected] = useState<Project | null>(null);
    const [showCount, setShowCount] = useState(3);
    const handleClose = () => setSelected(null);
  
    return (
      <section id="projects" className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-24">
        {/* Section Heading */}
        <motion.div
          className="flex items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[#007acc] dark:text-[#64ffda] font-mono whitespace-nowrap">
            <span className="mr-2 font-mono text-[#007acc] dark:text-[#64ffda]">04.</span>
            Some Things I’ve Built
          </h2>
          <div className="h-px ml-5 flex-1 max-w-[300px] bg-[#8892b0] relative -top-[5px]" />
        </motion.div>
  
        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {projects.slice(0, showCount).map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-[#0a192f] border border-[#64ffda]/30 rounded shadow-sm transition hover:ring-2 hover:ring-[#64ffda]/30 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-[#f1f5f9] dark:bg-[#112240] p-[15px] rounded-t overflow-hidden">
                <div className="w-full aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover rounded"
                  />
                </div>
              </div>
  
              <div className="p-4 flex flex-col items-start gap-2">
                <h3 className="text-lg font-semibold text-[#111827] dark:text-[#ccd6f6]">
                  {project.name}
                </h3>
                <p className="text-sm text-[#4b5563] dark:text-[#8892b0] italic">
                  {oneLiners[project.id]}
                </p>
                <button
                  onClick={() => setSelected(project)}
                  className="text-sm text-[#007acc] dark:text-[#64ffda] hover:opacity-80 cursor-pointer transition"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
  
        {/* Toggle Button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {showCount < projects.length ? (
            <button
              onClick={() => setShowCount(6)}
              className="px-6 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition cursor-pointer"
            >
              Show More
            </button>
          ) : (
            <a
              href="https://github.com/Gideon-Cameron"
              target="_blank"
              className="px-6 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition cursor-pointer"
            >
              Explore More on GitHub
            </a>
          )}
        </motion.div>
  
        {/* Modal */}
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center px-4"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white dark:bg-[#0a192f] rounded-lg p-6 max-w-4xl w-full shadow-xl relative flex flex-col md:flex-row gap-6"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="md:w-[45%] bg-[#f1f5f9] dark:bg-[#112240] rounded">
                <div className="p-[5px]">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
              </div>
  
              <div className="flex-1 text-[#111827] dark:text-[#ccd6f6]">
                <h3 className="text-2xl font-semibold mb-4">{selected.name}</h3>
                <p className="mb-6 whitespace-pre-line text-[#4b5563] dark:text-[#8892b0]">
                  {selected.description}
                </p>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold mb-2 text-[#64ffda]">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {selected.stack.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-[#ccd6f6] bg-[#112240] px-3 py-1 rounded-full shadow border border-[#64ffda]/30"
                      >
                        {tech.icon}
                        <span className="text-xs">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
  
                <div className="mt-6 flex gap-4">
                  <a
                    href={selected.github}
                    target="_blank"
                    className="px-4 py-2 border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 rounded transition cursor-pointer"
                  >
                    Code
                  </a>
                  <a
                    href={selected.live}
                    target="_blank"
                    className="px-4 py-2 border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 rounded transition cursor-pointer"
                  >
                    Preview
                  </a>
                </div>
  
                <button
                  onClick={handleClose}
                  className="absolute top-3 right-4 text-xl text-[#64ffda] hover:opacity-75 cursor-pointer"
                >
                  &times;
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>
    );
  };
  
  export default Projects;
  