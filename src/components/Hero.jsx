import React, { useRef } from "react";
import my2 from "../assets/images/My-Bitmoji.png";
import Type from "./Type";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const socialMediaLinks = [
  "https://www.instagram.com/_pritesh_pawar_/",
  "https://github.com/pritesh5453",
  "https://www.linkedin.com/in/pritesh-pawar-1b4205244/",
];

const social_media = [
  <FaInstagram />,
  <FaGithub />,
  <FaLinkedin />
];

const Hero = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={my2} alt="My Bitmoji" className="md:w-3/6 h-auto object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Pritesh Pawar</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            <Type />
          </h4>
          <button className="btn-primary mt-8" onClick={scrollToContact}>
            Connect with Me
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media.map((icon, index) => (
              <a
                key={index}
                href={socialMediaLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;
