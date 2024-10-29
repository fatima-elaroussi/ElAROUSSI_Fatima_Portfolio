import React, { useEffect } from "react";
import project1 from "../assets/project1.png";
import project3 from "../assets/project7.png";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiMongodb,
} from "react-icons/di";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="max-w-[1000px] mx-auto p-6 grid grid-cols-2 gap-8 place-items-center md:py-52 "
      id="about"
    >
      <div className="p-6">
        <h2 className="text-gray-200 text-4xl font-bold mb-4">
          {" "}
          <span>My</span> Skills
        </h2>
        <p className="text-gray-300 mb-4">
          As a Full Stack Developer, I specialize in the MERN stack—MongoDB,
          Express, React, and Node.js—to build responsive and user-focused
          applications. I’m skilled in creating intuitive front-end interfaces
          and robust back-end systems, with a focus on secure, scalable APIs and
          seamless user experiences. With a strong commitment to learning and
          growth
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiHtml5
            className="text-orange-600"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-in-sine"
          />
          <DiCss3
            className="text-blue-600"
            data-aos="fade-up"
            data-aos-duration="2100"
            data-aos-easing="ease-in-sine"
          />

          <TbBrandTypescript
            className="text-purple-600"
            data-aos="fade-up"
            data-aos-duration="2300"
            data-aos-easing="ease-in-sine"
          />
          <DiJavascript1
            className="text-yellow-500"
            data-aos="fade-up"
            data-aos-duration="2400"
            data-aos-easing="ease-in-sine"
          />
          <DiReact
            className="text-blue-500"
            data-aos="fade-up"
            data-aos-duration="2500"
            data-aos-easing="ease-in-sine"
          />
          <DiNodejsSmall
            className="text-green-500"
            data-aos="fade-up"
            data-aos-duration="2600"
            data-aos-easing="ease-in-sine"
          />
          <SiExpress
            className="text-green-500 "
            data-aos="fade-up"
            data-aos-duration="2700"
            data-aos-easing="ease-in-sine"
          />
          <SiTailwindcss
            className="text-blue-600"
            data-aos="fade-up"
            data-aos-duration="2780"
            data-aos-easing="ease-in-sine"
          />
        </div>
      </div>

      <div className="relative group" data-aos="fade-left"
        data-aos-duration="2500"
        data-aos-easing="ease-in-sine">
        <div
          className="w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-100
             to-orange-900 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300"
        ></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={project1}
            alt="project 1"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      <div className="relative group" data-aos="fade-right"
        data-aos-duration="2500"
        data-aos-easing="ease-in-sine">
        <div
          className="w-full h-full absolute -inset-1 bg-gradient-to-r
             from-purple-100 to-orange-900 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300"
        ></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={project3}
            alt="project 3"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">
          Frontend <span>Experience</span>
        </h2>
        <p className="text-gray-300 mb-4">
          As a passionate Front-End developer, I focus on creating visually
          appealing and responsive web applications. I specialize in building
          modern, user-friendly interfaces and seamless back-end functionality
          using the latest technologies in the MERN stack.
        </p>
      </div>

      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">
          BackEnd <span>Experience</span>
        </h2>
        <p className="text-gray-300 mb-4">
          With expertise in back-end development, I build secure, scalable
          applications using Node.js and Express. My work focuses on creating
          efficient RESTful APIs, managing MongoDB databases, and ensuring
          seamless, reliable integration for full-stack applications.
        </p>
      </div>

      <div className="relative group"data-aos="fade-left"
        data-aos-duration="2500"
        data-aos-easing="ease-in-sine">
        <div
          className="w-full h-full absolute -inset-1 bg-gradient-to-r
             from-purple-100 to-orange-900 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300"
        ></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={project3}
            alt="project 3"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
