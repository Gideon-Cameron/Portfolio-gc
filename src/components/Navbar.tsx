import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const sections = ["About", "Experience", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-dark-background shadow-md transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#111827] dark:text-white">Gideon</h1>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-4">
          <ul className="flex gap-6 text-sm font-medium">
            {sections.map((section, index) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="group transition-colors duration-200 text-[#111827] dark:text-[#ccd6f6] hover:text-[#007acc] dark:hover:text-[#64ffda]"
                >
                  <span className="text-[#007acc] dark:text-[#64ffda] mr-1 font-mono">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  {section}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="px-4 py-2 rounded border border-[#007acc] dark:border-[#64ffda] text-[#007acc] dark:text-[#64ffda] hover:bg-[#007acc]/10 dark:hover:bg-[#64ffda]/10 transition-colors duration-200"
              >
                Resume
              </a>
            </li>
          </ul>

          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-[#111827] dark:text-[#ccd6f6] p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white dark:bg-dark-background px-6 pb-6 pt-2 text-[#111827] dark:text-[#ccd6f6]">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {sections.map((section, index) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block transition-colors duration-200 hover:text-[#007acc] dark:hover:text-[#64ffda]"
                >
                  <span className="text-[#007acc] dark:text-[#64ffda] mr-1 font-mono">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  {section}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 mt-2 rounded border border-[#007acc] dark:border-[#64ffda] text-[#007acc] dark:text-[#64ffda] hover:bg-[#007acc]/10 dark:hover:bg-[#64ffda]/10 transition-colors duration-200"
              >
                Resume
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
