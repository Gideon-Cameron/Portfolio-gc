import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Experience from "./components/Experience";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-light-background text-light-textPrimary dark:bg-dark-background dark:text-dark-textPrimary transition-colors duration-300 font-sans">
      <Navbar />

      <p className="text-center mt-10 text-lg font-semibold">
        Theme test: <span className="text-[#64ffda]">This text should change color when theme toggles</span>
      </p>

      {/* <main className="pt-20 space-y-32 px-6 md:px-12">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main> */}

      {/* <Footer /> */}
    </div>
  );
};

export default App;
