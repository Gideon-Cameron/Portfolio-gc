import { useState } from "react";

type Project = {
  id: number;
  name: string;
  image: string;
  description: string;
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Space Tourism Website",
    image: "/src/assets/space-tourism.png",
    description:
      "A beautifully designed, multi-page website that simulates a real-world space tourism brand. Built using advanced responsive techniques with modern CSS and React routing, it includes animated transitions, tabbed content, and pixel-perfect layouts. Emphasis was placed on accessibility, semantic HTML, and mobile performance. Ideal for demonstrating front-end precision and design fidelity.",
    github: "https://github.com/Gideon-Cameron/Space-Tourism",
    live: "https://space-tourism-main1.netlify.app/",
  },
  {
    id: 2,
    name: "Dev Dash",
    image: "/src/assets/dev-dash.png",
    description:
      "Dev Dash is a developer productivity dashboard that integrates GitHub stats, motivational quotes, and custom tools all in one place. Built with TypeScript and React, it uses GitHub’s REST API and features persistent user state, theme toggling, and clean modular UI. It demonstrates full project structuring, API data management, and polished UI/UX workflow across components.",
    github: "https://github.com/Gideon-Cameron/Dev-Dash",
    live: "https://dev-dash-gc.netlify.app/",
  },
  {
    id: 3,
    name: "React Weather App",
    image: "/src/assets/weather-app.png",
    description:
      "A responsive weather dashboard built with React and the OpenWeather API. Users can search any city and receive real-time temperature, humidity, wind, and condition data. Designed with mobile-first principles and graceful error handling for unknown locations or API issues. Highlights include stateful search, dynamic theming, and external data integration with user-friendly visuals.",
    github: "https://github.com/Gideon-Cameron/React-Weather-App",
    live: "https://weather-app-xy.netlify.app/",
  },
  {
    id: 4,
    name: "Fluentwave Beta",
    image: "/src/assets/fluentwave.png",
    description:
      "Fluentwave is a full-stack language learning platform that gamifies study through XP points, progress tracking, and authentication. Built with MERN stack (MongoDB, Express, React, Node), it uses JWT for secure auth and React Router for seamless transitions. It features quiz logic, dynamic UI, and user dashboards — offering strong backend and frontend integration.",
    github: "https://github.com/Gideon-Cameron/Fluentwave-beta",
    live: "https://fluentwave-beta.netlify.app/",
  },
  {
    id: 5,
    name: "Job Tracker",
    image: "/src/assets/job-tracker.png",
    description:
      "A Kanban-style job application manager that helps users organize job search efforts. Includes categories like 'Applied', 'Interviewing', and 'Offer', with drag-and-drop UX, dynamic state updates, and local persistence. Built with React and TypeScript, it emphasizes component reuse, state logic clarity, and real-world productivity use cases.",
    github: "https://github.com/Gideon-Cameron/Job-Tracker",
    live: "https://job-trackerz.netlify.app/",
  },
  {
    id: 6,
    name: "Calculator App",
    image: "/src/assets/calculator-app.png",
    description:
      "A modern calculator app with full arithmetic support, keyboard input, responsive layout, and dark/light theming. Built using React and Tailwind CSS, it focuses on both utility and UI polish. Internal logic separates display formatting from calculation operations, showcasing a well-organized React component and event handling strategy.",
    github: "https://github.com/Gideon-Cameron/Calculator-app",
    live: "https://calculator-app-xl.netlify.app/",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showCount, setShowCount] = useState(3);

  const handleClose = () => setSelected(null);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-24">
      {/* Section Heading */}
      <div className="flex items-center mb-12">
        <h2 className="text-2xl font-bold text-[#007acc] dark:text-[#64ffda] font-mono whitespace-nowrap">
          <span className="mr-2 font-mono text-[#007acc] dark:text-[#64ffda]">04.</span>
          Some Things I’ve Built
        </h2>
        <div className="h-px ml-5 flex-1 max-w-[300px] bg-[#8892b0] relative -top-[5px]" />
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, showCount).map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-[#0a192f] border border-[#64ffda]/30 rounded shadow-sm transition hover:ring-2 hover:ring-[#64ffda]/30 hover:shadow-md"
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
              <button
                onClick={() => setSelected(project)}
                className="text-sm text-[#007acc] dark:text-[#64ffda] hover:opacity-80 cursor-pointer transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="mt-12 flex justify-center">
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
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center px-4"
          onClick={handleClose}
        >
          <div
            className="bg-white dark:bg-[#0a192f] rounded-lg p-6 max-w-4xl w-full shadow-xl relative flex flex-col md:flex-row gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="md:w-[45%] bg-[#f1f5f9] dark:bg-[#112240] rounded">
              <div className="p-[5px]">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            </div>

            {/* Modal Details */}
            <div className="flex-1 text-[#111827] dark:text-[#ccd6f6]">
              <h3 className="text-2xl font-semibold mb-4">{selected.name}</h3>
              <p className="mb-6 text-[#4b5563] dark:text-[#8892b0]">{selected.description}</p>
              <div className="flex gap-4">
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
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
