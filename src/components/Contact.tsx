import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaTelegram, FaGithub, FaPhone } from "react-icons/fa";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    emailjs
      .sendForm("service_2e9zq4f", "template_mq85xh3", form.current, "VSey23muaE28V71S_")
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setMessageSent(true);
          setError(null);
          form.current?.reset();
        },
        (error) => {
          console.error("Email failed to send:", error.text);
          setError("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-24 text-center">
      {/* Heading */}
      <div className="flex items-center justify-center mb-12">
        <h2 className="text-2xl font-bold text-[#007acc] dark:text-[#64ffda] font-mono whitespace-nowrap">
          <span className="mr-2 font-mono text-[#007acc] dark:text-[#64ffda]">05.</span>
          What’s Next?
        </h2>
        <div className="h-px ml-5 flex-1 max-w-[300px] bg-[#8892b0] relative -top-[5px]" />
      </div>

      {/* Description & Button */}
      <p className="text-lg text-[#111827] dark:text-[#ccd6f6] mb-6 max-w-xl mx-auto">
        I’m currently looking for full-time frontend opportunities. If you’re interested in working
        together or just want to connect, feel free to reach out. I’ll respond as soon as I can!
      </p>

      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-2 border border-[#007acc] dark:border-[#64ffda] text-[#007acc] dark:text-[#64ffda] rounded hover:bg-[#007acc]/10 dark:hover:bg-[#64ffda]/10 transition"
        >
          Say Hello
        </button>
      )}

      {/* Contact Form */}
      {showForm && (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-10 bg-white dark:bg-[#0a192f] p-6 rounded-lg shadow-md flex flex-col gap-4 text-left"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-[#111827] dark:text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-[#111827] dark:text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-[#111827] dark:text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition"
          >
            Send Message
          </button>

          {/* Feedback */}
          {messageSent && <p className="text-green-500 mt-2">✅ Message sent successfully!</p>}
          {error && <p className="text-red-500 mt-2">❌ {error}</p>}
        </form>
      )}

      {/* Social Links */}
      <div className="mt-12 flex justify-center gap-6 text-2xl">
        <a href="https://www.linkedin.com/in/gideon-cameron-335801263/" target="_blank">
          <FaLinkedin className="hover:text-[#64ffda] transition text-[#8892b0]" />
        </a>
        <a href="https://t.me/gideonwork1" target="_blank">
          <FaTelegram className="hover:text-[#64ffda] transition text-[#8892b0]" />
        </a>
        <a href="https://github.com/Gideon-Cameron" target="_blank">
          <FaGithub className="hover:text-[#64ffda] transition text-[#8892b0]" />
        </a>
        <a href="tel:+251980277582">
          <FaPhone className="hover:text-[#64ffda] transition text-[#8892b0]" />
        </a>
      </div>

      {/* Resume Button */}
      <div className="mt-10">
        <a
          href="/resume.pdf"
          download="Gideon-Resume.pdf"
          className="px-6 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;
