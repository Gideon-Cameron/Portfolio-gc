
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Gideon</h1>
        <ul className="flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          {["About", "Experience", "Skills", "Projects", "Contact"].map((section) => (
            <li key={section}>
              <a href={`#${section.toLowerCase()}`} className="hover:text-blue-500 transition-colors duration-200">
                {section}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
