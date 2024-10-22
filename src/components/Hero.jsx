import React from "react";
import profilepic from "../assets/photoPortfolio_black.png";
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
import { SiExpress, SiTypescript, SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { motion } from "framer-motion";
import ShinyEffect from "./ShinyEffect";

const Hero = () => {
  const dancingAnimation = {
    rotate: [0, 8, -8, 8, -8, 0], // Less rotation for smoother motion
    y: [0, -5, 0], // Smaller vertical movement for smoother bounce
    scale: [1, 1.05, 1], // Slightly smaller scaling
  };
  

  return (
    <div
      className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0 md:py-40"
      id="home"
    >
      <div className="grid grid-cols-2 md:col-span-5 glass p-8">
        <div className="my-auto">
          <img
            className="w-[800px] mx-auto h-auto"
            src={profilepic}
            alt="profile pic"
          />
        </div>

        <div className="my-auto ml-8 flex-col">
          <p className="text-2xl md:text-4xl font-bold text-gray-200">
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
            />
          </p>
        </div>

        <button
          role="button"
          className="mt-4 px-4 py-2 text-lg font-bold text-white bg-primary-color rounded-xl"
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

      <div className="grid grid-cols-1 md:col-span-3 gap-6">
        <div className="text-5xl p-12 glass">
          <p className="text-gray-200 text-xl font-bold mb-4 text-center">
            My Tech Stack
          </p>
          <div className="grid grid-cols-4 gap-4">
            <motion.a
              animate={dancingAnimation}
              // transition={{
              //   duration: 1.5,
              //   ease: "easeInOut",
              //   repeat: Infinity,
              //   repeatType: "mirror",
              // }}
              transition={{
                duration: 2, // Slower duration for a smoother effect
                ease: "easeInOut", // Smooth easing function
                repeat: Infinity,
                repeatType: "mirror",
              }}
              
              className="hover:scale-100 transition-transform duration-300"
            >
            <DiHtml5 className="text-orange-600 shadow-orange" />
              
            </motion.a>

            <motion.a
              animate={dancingAnimation}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="hover:scale-100 transition-transform duration-300"
            >
            <DiCss3 className="text-blue-600 shadow-blue " />
              
            </motion.a>

            <motion.a
              animate={dancingAnimation}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="hover:scale-100 transition-transform duration-300"
            >
            <DiBootstrap className="text-purple-600 shadow-purple" />
              
            </motion.a>

            <motion.a
              animate={dancingAnimation}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="hover:scale-100 transition-transform duration-300"
            >
            <SiTailwindcss className="text-blue-600 shadow-blue" />
              
            </motion.a>

            <motion.a
              animate={dancingAnimation}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="hover:scale-100 transition-transform duration-300"
            >
            <DiJavascript1 className="text-yellow-500 shadow-yellow" />
              
            </motion.a>

            <motion.a
              animate={dancingAnimation}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="hover:scale-100 transition-transform duration-300"
            >
            <DiReact className="text-blue-500 shadow-blue" />
              
            </motion.a>


            <motion.a
              animate={dancingAnimation}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="hover:scale-100 transition-transform duration-300"
            >
            <DiNodejsSmall className="text-green-500 shadow-green" />
              
            </motion.a>

            <motion.a
              animate={dancingAnimation}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="hover:scale-100 transition-transform duration-300"
            >
            <DiMongodb className="text-green-500 shadow-green" />
              
            </motion.a>

            <motion.a
              animate={dancingAnimation}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="hover:scale-100 transition-transform duration-300"
            >
            <SiExpress className="text-green-500 shadow-green" />
              
            </motion.a>

            <motion.a
              animate={dancingAnimation}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="hover:scale-100 transition-transform duration-300"
            >
            {/* <SiTypescript className="text-blue-600 shadow-blue" /> */}
            <TbBrandTypescript className="text-blue-600 shadow-blue"/>
            {/* <BiLogoTypescript className="text-blue-600 shadow-blue" />       */}
            </motion.a>
          </div>
        </div>

        <div className="text-5xl gap-16 flex justify-center items-center glass text-gray-600">
          <motion.a
            href="https://github.com/fatima-elaroussi"
            animate={dancingAnimation}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="hover:scale-100 transition-transform duration-300"
          >
            <AiFillGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/fatima-elaroussi"
            animate={dancingAnimation}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="hover:scale-100 transition-transform duration-300"
          >
            <AiFillLinkedin />
          </motion.a>
        </div>

        <div className="absolute inset-0 overflow-hidden md:overflow-visible">
          <div className="hidden md:block">
            <ShinyEffect left={550} top={100} size={700} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
