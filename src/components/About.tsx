import profileImage from "../assets/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-24 flex flex-col md:flex-row gap-12 items-center"
    >
      {/* LEFT - TEXT */}
      <div className="md:w-3/5">
        {/* SECTION HEADING */}
        <div className="flex items-center mb-8">
  <h2 className="text-2xl font-bold text-[#007acc] dark:text-[#64ffda] font-mono whitespace-nowrap">
    <span className="mr-2 font-mono text-[#007acc] dark:text-[#64ffda]">01.</span>
    About Me
  </h2>
  <div className="h-px ml-5 flex-1 max-w-[300px] bg-[#233554] relative -top-[0px]" />
</div>

        <div className="space-y-4 text-[#4b5563] dark:text-[#8892b0] text-base leading-relaxed">
          <p>
            Hello! My name is Gideon and I enjoy creating things that live on the internet.
            My interest in web development started back in 2020 when I took my first online course —
            turns out styling and coding fit me like a glove, and I haven’t stopped since.
          </p>

          <p>
            Fast-forward to today, I’ve had the opportunity to work on freelance projects, collaborate with
            other developers, and bring ideas to life from scratch.
          </p>

          <p>
            My current focus is building accessible, responsive, and user-friendly digital experiences using tools like React,
            TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>

      {/* RIGHT - IMAGE */}
      <div className="md:w-2/5 flex justify-center">
        <div className="relative group w-64 h-64 rounded-md overflow-hidden shadow-lg">
          <img
            src={profileImage}
            alt="Gideon Cameron"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 rounded"
          />
          <div className="absolute inset-0 border-2 border-[#64ffda] rounded pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default About;
