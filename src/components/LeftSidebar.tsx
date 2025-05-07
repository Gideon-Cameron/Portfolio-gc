import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const LeftSidebar = () => {
  const icons = [
    {
      id: 1,
      href: "https://github.com/Gideon-Cameron",
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      id: 2,
      href: "https://linkedin.com/in/gideon-cameron-335801263",
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      id: 3,
      href: "https://t.me/gideonwork1",
      icon: <FaTelegram className="w-5 h-5" />,
      label: "Telegram",
    },
  ];

  return (
    <div className="hidden nav:flex fixed bottom-0 left-0 pl-4 pr-2 flex-col items-center space-y-6 z-40">
      {icons.map((item, index) => (
        <motion.a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
          className="text-gray-600 dark:text-gray-400 hover:text-[#64ffda] transition"
          aria-label={item.label}
        >
          {item.icon}
        </motion.a>
      ))}

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "8rem", opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="w-[2px] bg-[#111827] dark:bg-[#ccd6f6] mt-6 mb-2"
      />
    </div>
  );
};

export default LeftSidebar;
