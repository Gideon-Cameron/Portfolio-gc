import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="mt-20 px-6 py-8 text-center text-sm text-[#4b5563] dark:text-[#8892b0]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-2 items-center">
        <p>
          Designed & Built by{" "}
          <a
            href="https://www.linkedin.com/in/gideon-cameron-335801263/"
            target="_blank"
            className="hover:text-[#007acc] dark:hover:text-[#64ffda] transition"
          >
            Gideon Cameron
          </a>
        </p>
        <p>
          <a
            href="mailto:gideonwork20@gmail.com"
            className="hover:text-[#007acc] dark:hover:text-[#64ffda] transition"
          >
            gideonwork20@gmail.com
          </a>{" "}
          |{" "}
          <a
            href="tel:+251980277582"
            className="hover:text-[#007acc] dark:hover:text-[#64ffda] transition"
          >
            +251 980 277 582
          </a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
