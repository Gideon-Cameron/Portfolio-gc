const RightSidebar = () => {
    return (
      <div className="hidden lg:flex fixed bottom-0 right-8 flex-col items-center">
        <a
          href="mailto:gideonwork20@gmail.com"
          className="mb-4 text-sm font-mono text-[#4b5563] dark:text-[#8892b0] hover:text-[#64ffda] transition transform rotate-90 origin-bottom"
        >
          gideonwork20@gmail.com
        </a>
        <div className="w-[2px] h-24 bg-[#111827] dark:bg-[#ccd6f6]" />
      </div>
    );
  };
  
  export default RightSidebar;
  