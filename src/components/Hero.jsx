
// import React from "react";
// import heroImg from "../assets/jasmine-hero.jpg";
// import AnimatedTitles from "./utils/AnimatedTitles.jsx"; 
// import { LiaLinkedin } from "react-icons/lia";
// import { BsTwitter } from "react-icons/bs";
// import { SiLeetcode } from "react-icons/si";
// import { FaGithub } from "react-icons/fa";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="w-full h-screen bg-gradient-to-br from-green-900 via-gray-900 to-gray-950 flex items-center"
//     >
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 h-full px-6">

//         {/* LEFT SIDE */}
//         <div className="flex flex-col justify-center text-white space-y-6">

//           <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//             Hi, I’m <span className="text-green-300">Jasmine</span>
//           </h1>

//           <AnimatedTitles />

//           <p className="text-lg text-gray-300 max-w-md">
//             A Passionate Frontend Developer, MERN Learner & Graphic Designer —
//             turning creativity into attractive UI experiences.
//           </p>

//           {/* TAGS */}
//           <div className="mt-6 flex-wrap gap-4 text-sm font-medium text-white">
//             <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">FullStack Developer</span>
//             <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">Frontend Developer</span>
//             <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">Backend Developer</span>
//             <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">UI/UX Design</span>
//             <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">Graphics Designer</span>
//           </div>

//           {/* SOCIAL ICONS */}
//           <div className="flex gap-8 justify-center md:justify-start">
//             <a href="https://github.com/yourgithub" target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors">
//               <FaGithub />
//             </a>

//             <a href="https://www.linkedin.com/in/yourlinkedin/" target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors">
//               <LiaLinkedin />
//             </a>

//             <a href="https://twitter.com/yourtwitter" target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors">
//               <BsTwitter />
//             </a>

//             <a href="https://leetcode.com/yourleetcode/" target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors">
//               <SiLeetcode />
//             </a>
//           </div>

//           {/* BUTTONS → Yahi mistake thi! */}
//           <div className="mt-8 flex flex-col sm:flex-row gap-10">
//             <button
//               onClick={() => {
//                 const proj = document.getElementById("projects");
//                 if (proj) proj.scrollIntoView({ behavior: "smooth" });
//               }}
//               className="ml-4 px-5 py-1 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 hover:opacity-90 text-white font-normal transition-all"
//             >
//               Explore My Work →
//             </button>

//             <a
//              href="/JasmineResumeKk.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="ml-4 px-5 py-1 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 hover:opacity-90 text-white font-normal transition-all">
//               View CV
//             </a>

//           </div>

//         </div>

//         {/* RIGHT IMAGE SIDE */}
//         <div className="relative flex justify-center items-center">
//           <img
//             src={heroImg}
//             alt="Jasmine"
//             className="w-[380px] md:w-[460px] object-cover rounded-2xl drop-shadow-[0_0_40px_rgba(0,255,180,0.35)]"
//           />

//           <div className="absolute -z-10 w-[380px] h-[380px] md:w-[460px] md:h-[460px] bg-green-400/20 rounded-full blur-3xl"></div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import heroImg from "../assets/jasmine-hero.jpg";
import AnimatedTitles from "./utils/AnimatedTitles.jsx";
import { LiaLinkedin } from "react-icons/lia";
import { BsTwitter } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-gradient-to-br from-green-900 via-gray-900 to-gray-950 flex items-center py-10 md:py-0"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center text-white space-y-6 text-center md:text-left">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-green-300">Jasmine</span>
          </h1>

          <AnimatedTitles />

          <p className="text-base sm:text-lg text-gray-300 max-w-md mx-auto md:mx-0">
            A Passionate Frontend Developer, MERN Learner & Graphic Designer —
            turning creativity into attractive UI experiences.
          </p>

          {/* TAGS */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3 text-sm font-medium">
            {[
              "FullStack Developer",
              "Frontend Developer",
              "Backend Developer",
              "UI/UX Design",
              "Graphics Designer",
            ].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 justify-center md:justify-start mt-4">
            <a
              href="https://github.com/Assistantjasmine282/"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/jasmine-rai-6a422427b

"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition"
            >
              <LiaLinkedin />
            </a>

            <a
              href="https://x.com/jas_mine_rai12
"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition"
            >
              <BsTwitter />
            </a>

            <a
              href="https://leetcode.com/silentprogrammer"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition"
            >
              <SiLeetcode />
            </a>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-5">
            <button
              onClick={() => {
                const proj = document.getElementById("projects");
                if (proj) proj.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 hover:opacity-90 text-white transition-all"
            >
              Explore My Work →
            </button>

            <a
              href="/JasmineRai2026Batch.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 hover:opacity-90 text-white transition-all"
            >
              View CV
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="relative flex justify-center md:justify-end items-center">
          <img
            src={heroImg}
            alt="Jasmine"
            className="w-[260px] sm:w-[320px] md:w-[420px] lg:w-[480px] object-cover rounded-2xl shadow-2xl"
          />

          <div className="absolute -z-10 w-[260px] sm:w-[320px] md:w-[420px] lg:w-[480px] h-[260px] sm:h-[320px] md:h-[420px] lg:h-[480px] bg-green-400/20 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
