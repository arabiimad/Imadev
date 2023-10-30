"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold"> 
            <span className=" text-transparent bg-clip-text bg-gradient-to-br  from-orange-800 via-yellow-600 to-yellow-400">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Imadeddine",
                1000,
                "Fullstack",
                1000,
                "Frontend",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          As a web developer with a strong foundation in both frontend and backend technologies, <br /> 
          I thrive on designing and building responsive, user-friendly applications. With each line of code, <br />I strive to create meaningful digital experiences. 
          Explore my portfolio to see what I’ve been up <br /> to, or get in touch to discuss how we can collaborate on your next project.
          </p>
          <div>
            <Link
              href="#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br  from-orange-800 via-yellow-600 to-yellow-400 hover:bg-slate-200 text-black"
            >
              Hire Me
            </Link>
            <Link
              href="ARABI Imadeddine CV.pdf"
              download
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-orange-800 via-yellow-600 to-yellow-400 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className=" rounded-xl bg-[#181818] w-[350px] h-[170px] lg:w-[600px] lg:h-[290px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={600}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
