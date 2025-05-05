const Hero = () => {
    return (
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-4xl mx-auto">
        <p className="text-[#007acc] dark:text-[#64ffda] text-base md:text-lg font-mono mb-2">
          Hi, my name is
        </p>
  
        <h1 className="text-4xl md:text-5xl font-bold text-[#111827] dark:text-[#ccd6f6] mb-2">
          Gideon Cameron.
        </h1>
  
        <h2 className="text-3xl md:text-4xl font-semibold text-[#4b5563] dark:text-[#8892b0] mb-6">
          I build things for the web.
        </h2>
  
        <p className="text-lg md:text-xl leading-relaxed text-[#111827] dark:text-[#ccd6f6] max-w-2xl">
          I'm a frontend developer specializing in building (and occasionally designing) exceptional, responsive,
          high-performance digital experiences.
          <br />
          Currently, I’m focused on building accessible, well designed and user friendly projects.
        </p>
      </section>
    );
  };
  
  export default Hero;
  