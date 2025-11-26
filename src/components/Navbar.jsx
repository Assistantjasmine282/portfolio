
import React, { Fragment, useState, useEffect } from "react";
import { navItems } from "../data/data.jsx";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  // ACTIVE SECTION ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SMOOTH SCROLL ON CLICK
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <Fragment>
      <nav className="fixed bg-black top-0 w-full z-50 border-b border-white/20 px-3">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="text-2xl font-bold text-white">Coder</div>

          <ul className="hidden sm:flex space-x-8 text-white text-sm font-light uppercase">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer hover:text-teal-400 transition-colors ${
                  activeSection === item.id ? "text-teal-400" : ""
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>

          <button
              onClick={() => {
               document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
               }}
              className="ml-4 px-5 py-1 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 hover:opacity-90 text-white font-normal transition-all"
              >
             Hire me
             </button>

        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;



