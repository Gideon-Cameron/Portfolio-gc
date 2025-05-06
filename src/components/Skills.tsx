import { useState } from "react";

const skillGroups = {
  Frontend: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Tailwind CSS",
    "Responsive Design",
    "UI/UX Design",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "JWT Authentication",
    "Jest (Testing)",
  ],
  "Version Control & Tools": ["Git", "GitHub", "VS Code"],
};

const categories = Object.keys(skillGroups) as Array<keyof typeof skillGroups>;

const Skills = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof skillGroups>("Frontend");

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-24">
      {/* Section Heading */}
      <div className="flex items-center mb-12">
        <h2 className="text-2xl font-bold text-[#007acc] dark:text-[#64ffda] font-mono whitespace-nowrap">
          <span className="mr-2 font-mono text-[#007acc] dark:text-[#64ffda]">03.</span>
          Skills & Tools
        </h2>
        <div className="h-px ml-5 flex-1 max-w-[300px] bg-[#8892b0] relative -top-[5px]" />
      </div>

      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded border transition text-sm font-mono ${
              activeTab === category
                ? "bg-[#64ffda]/10 text-[#64ffda] border-[#64ffda]"
                : "text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-[#64ffda] hover:text-[#64ffda]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillGroups[activeTab].map((skill) => (
          <div
            key={skill}
            className="text-center py-3 px-4 rounded text-sm text-[#111827] dark:text-[#ccd6f6] hover:text-[#007acc] dark:hover:text-[#64ffda] hover:bg-[#64ffda]/10 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
