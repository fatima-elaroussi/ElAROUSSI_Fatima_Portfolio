import React, { useEffect } from "react";
import profilepic from "../assets/photo_portfolio_No background.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
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
import ShinyEffect from "./ShinyEffect";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0 md:py-32"
      id="home"
    >
      <div
        className="grid grid-cols-2 md:col-span-5 glass p-8 "
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
      >
        <div className="my-auto">
          <img
            className="w-[800px] mx-auto h-auto rounded-l-full rounded-r-full"
            src={profilepic}
            alt="profile pic"
          />
        </div>

        <div className="my-auto ml-8 flex-col">
          <p className="text-xl md:text-4xl font-bold text-gray-200">
            Hi! I am <br /> EL AROUSSI Fatima <br />
            <TypeAnimation
              sequence={[
                "Full stack Dev",
                1000,
                "Backend Dev",
                1000,
                "Frontend Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            className="hidden md:block "/>
          </p>
          <span className="text-2xl font-bold">Full stack Dev</span>
          <div>
            <button
              role="button"
              className=" mt-5 md:mt-16  px-5 py-2 text-xs md:text-lg w-full font-bold text-white bg-primary-color rounded-xl"
            >
              <a
                href="/CV_Fatima_EL_AROUSSI.pdf"
                download="CV_Fatima_EL_AROUSSI.pdf"
                title="Download CV"
                className="text-white"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:col-span-3 gap-6"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
      >
        <div className="text-5xl p-12 glass">
          <p className="text-gray-200 text-xl font-bold mb-4 text-center">
            My Tech Stack
          </p>
          <div className="grid grid-cols-4 gap-4">
            <DiHtml5 className="text-orange-600 shadow-orange" />

            <DiCss3 className="text-blue-600 shadow-blue " />

            <DiBootstrap className="text-purple-600 shadow-purple" />

            <SiTailwindcss className="text-blue-600 shadow-blue" />

            <DiJavascript1 className="text-yellow-500 shadow-yellow" />

            <DiReact className="text-blue-500 shadow-blue" />

            <DiMongodb className="text-green-500 shadow-green" />

            <SiExpress className="text-green-500 shadow-green" />

            <TbBrandTypescript className="text-blue-600 shadow-blue" />
          </div>
        </div>

        <div className="text-5xl gap-16 flex justify-center items-center glass text-gray-600">
        <a
            href="https://github.com/fatima-elaroussi"
            className="hover:scale-100 transition-transform duration-300"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/fatima-elaroussi"
            className="hover:scale-100 transition-transform duration-300"
          >
            <AiFillLinkedin />
          </a>

          
        </div>
      </div>
    </div>
  );
};

export default Hero;
