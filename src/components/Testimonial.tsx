import { motion } from "framer-motion";
import arielImg from "../assets/ariel.jpg";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-24"
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
          <span className="mr-2 font-mono text-[#007acc] dark:text-[#64ffda]">
            05.
          </span>
          Testimonials
        </h2>
        <div className="h-px ml-5 flex-1 max-w-[300px] bg-[#8892b0] relative -top-[5px]" />
      </motion.div>

      {/* Testimonial Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#0a192f] rounded-lg shadow-md p-8 md:p-10 text-left"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Profile Image */}
          <img
            src={arielImg}
            alt="Ariel Candace"
            className="w-20 h-20 rounded-full object-cover border-2 border-[#64ffda]"
          />

          {/* Details */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#111827] dark:text-[#ccd6f6]">
              Ariel Candace
            </h3>
            <p className="text-sm text-[#4b5563] dark:text-[#8892b0] mb-2">
              Marketing Strategist · Former Client
            </p>
            <p className="text-base leading-relaxed text-[#4b5563] dark:text-[#8892b0]">
              “Working with Gideon was a great experience from start to finish. I hired him to redesign and build a responsive personal portfolio website, and he delivered exactly what I needed — clean code, smooth animations, and a modern, user-friendly design. He was communicative throughout the process, took feedback seriously, and often went above and beyond to ensure perfection. I’d highly recommend him to anyone looking for a reliable and skilled frontend developer.”
            </p>

            {/* Links */}
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.linkedin.com/in/ariel-candace-646494272/"
                target="_blank"
                className="text-sm text-[#64ffda] hover:opacity-80"
              >
                View on LinkedIn
              </a>
              <a
                href="https://ariel-portfolio-ac.netlify.app/"
                target="_blank"
                className="text-sm text-[#64ffda] hover:opacity-80"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;
