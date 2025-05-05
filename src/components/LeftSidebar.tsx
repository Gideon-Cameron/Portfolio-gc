import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const LeftSidebar = () => {
  return (
    <div className="hidden nav:flex fixed bottom-0 left-0 pl-4 pr-2 flex-col items-center space-y-6 z-40">
      <a
        href="https://github.com/Gideon-Cameron"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-[#64ffda] transition"
      >
        <FaGithub className="w-5 h-5" />
      </a>
      <a
        href="https://linkedin.com/in/gideon-cameron-335801263"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-[#64ffda] transition"
      >
        <FaLinkedin className="w-5 h-5" />
      </a>
      <a
        href="https://t.me/gideonwork1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-[#64ffda] transition"
      >
        <FaTelegram className="w-5 h-5" />
      </a>
      <div className="w-[2px] h-32 bg-[#111827] dark:bg-[#ccd6f6] mt-6 mb-2" />
    </div>
  );
};

export default LeftSidebar;
