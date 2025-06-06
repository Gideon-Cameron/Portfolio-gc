import { useState } from "react";
import { motion } from "framer-motion";

const experiences = {
  Freelance: {
    title: "Frontend Developer",
    context: "Freelance / Self-employed",
    date: "2023 – Present",
    points: [
      "Built and deployed custom landing pages and portfolios using React and Tailwind.",
      "Worked directly with clients to translate design ideas into responsive web interfaces.",
      "Maintained accessibility and performance best practices in all projects.",
    ],
  },
  Collaborative: {
    title: "Collaborator",
    context: "Open Source / Teams",
    date: "2022 – 2023",
    points: [
      "Contributed to team-based projects with GitHub and version control.",
      "Worked on frontend logic, styling, and component structure.",
      "Participated in issue triage and feature planning in dev teams.",
    ],
  },
  Personal: {
    title: "Solo Developer",
    context: "Self-led Projects",
    date: "Ongoing",
    points: [
      "Built several full-stack applications to improve personal productivity.",
      "Explored advanced React patterns, performance optimization, and deployment pipelines.",
      "Designed and developed high-fidelity frontend UIs with React, TypeScript, and Tailwind CSS.",
      "Completed projects like Space Tourism and Weather App to demonstrate responsive layout, accessibility, and component-driven design.",
    ],
  },
};

const tabs = Object.keys(experiences) as Array<keyof typeof experiences>;

const Experience = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof experiences>("Freelance");

  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-24"
    >
      {/* Section Heading */}
      <motion.div
        className="flex items-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-[#007acc] dark:text-[#64ffda] font-mono whitespace-nowrap">
          <span className="mr-2 font-mono text-[#007acc] dark:text-[#64ffda]">02.</span>
          Where I've Worked
        </h2>
        <div className="h-px ml-5 flex-1 max-w-[300px] bg-[#8892b0] relative -top-[5px]" />
      </motion.div>

      {/* Layout */}
      <motion.div
        className="flex flex-col md:flex-row gap-8"
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
        {/* Tabs */}
        <motion.div
          className="md:w-1/4 border-l border-[#8892b0]"
          variants={{ hidden: {}, visible: {} }}
        >
          <ul className="flex md:flex-col text-sm font-mono">
            {tabs.map((tab, i) => (
              <motion.li
                key={tab}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <button
                  className={`w-full text-left px-4 py-3 transition-colors duration-200 ${
                    activeTab === tab
                      ? "border-l-2 border-[#64ffda] text-[#64ffda] dark:text-[#64ffda] bg-[#64ffda]/[0.05]"
                      : "text-[#4b5563] dark:text-[#8892b0] hover:bg-[#64ffda]/[0.03] hover:text-[#64ffda]"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Content */}
        <motion.div
          className="md:w-3/4"
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-[#111827] dark:text-[#ccd6f6]">
            {experiences[activeTab].title}{" "}
            <span className="text-[#007acc] dark:text-[#64ffda]">@ {experiences[activeTab].context}</span>
          </h3>
          <p className="text-sm font-mono text-[#4b5563] dark:text-[#8892b0] mb-4">
            {experiences[activeTab].date}
          </p>
          <ul className="list-disc ml-5 space-y-2 text-[#4b5563] dark:text-[#8892b0]">
            {experiences[activeTab].points.map((point, i) => (
              <motion.li
                key={i}
                className="leading-relaxed"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
