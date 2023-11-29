import React from "react";

const Navbar = () => {
  return (
    <header className="fixed h-16 w-screen z-10 bg-black/10 backdrop-blur-sm">
      <nav className="container mx-auto px-4 h-full py-2 flex justify-between items-center">
        <img src="logo-white.svg" alt="logo" className="h-full" />
        <div className="gap-8 sm:flex hidden">
          <a
            href="#"
            className="hover:scale-[1.1] hover:text-[#6ACFC7] duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:scale-[1.1] hover:text-[#6ACFC7] duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:scale-[1.1] hover:text-[#6ACFC7] duration-200"
          >
            Projects
          </a>
          <a
            href="#"
            className="hover:scale-[1.1] hover:text-[#6ACFC7] duration-200"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
