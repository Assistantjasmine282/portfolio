
import React from "react";
import { projectsItems } from "../data/data.jsx";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-r from-[#01191d] to-[#022c2b]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">
          My <span className="text-outline">Projects</span>
        </h2>
        <p className="text-gray-500 text-center mb-12">
          The tools and technologies I used to bring ideas to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:-translate-y-1 transition-transform"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  alt=""
                />
              </div>

              {/* Bottom details */}
              <div className="p-4 flex items-center justify-between">
                
                {/* Project Title */}
                <h3 className="text-gray-200 font-semibold text-lg">
                  {item.title}
                </h3>

                {/* Buttons */}
                <div className="flex gap-2">
                  {/* GitHub Button */}
                  <a
                    href={item.github}
                    target="_blank"
                    className="px-3 py-1 bg-black/40 text-white text-sm rounded-lg border border-white/20 hover:bg-black/60 transition"
                  >
                    GitHub
                  </a>

                  {/* Live Demo Button */}
                  <a
                    href={item.demo}
                    target="_blank"
                    className="px-3 py-1 bg-teal-500 text-white text-sm rounded-lg hover:bg-teal-600 transition"
                  >
                    Live
                  </a>
                  {/* Live Demo Button 2 */}
                      <a
                      href={item.adminDemo} // Admin page ka link
                       target="_blank"
                       rel="noopener noreferrer"
                       className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition"
                       >
                     Live Admin
                     </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
