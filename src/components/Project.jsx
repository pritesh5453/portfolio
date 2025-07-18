import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import projectOne from "../assets/images/Rock-Paper-Scissors-Icon.png";
import projectTwo from "../assets/images/Tic-Tac-Toe-Icon.png";
import projectThree from "../assets/images/Amazon-Clone-icon.png";
import projectFour from "../assets/images/Aasha-films-icon.png";
import projectFive from "../assets/images/HMS-Icon.png";

const Project = () => {
  const projects = [
    {
      img: projectFour,
      name: "Aasha-Films",
      github_link: "https://github.com/pritesh5453/Aasha-Films",
    },
    {
      img: projectTwo,
      name: "TIC-TAC-TOE",
      github_link: "https://github.com/pritesh5453/TIC-TAC-TOE",
    },
    {
      img: projectOne,
      name: "Rock-Paper-Scissor",
      github_link: "https://github.com/pritesh5453/Rock-Paper-Scissor",
    },
    {
      img: projectThree,
      name: "Amazon-Clone",
      github_link: "https://github.com/pritesh5453/Amazone-Clone",
    },
    {
      img: projectFive,
      name: "HMS",
      github_link: "https://github.com/pritesh5453/HMS",
    },
  ];

  return (
    <section id="projects" className="py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-12/13 w-full h-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt={project_info.name} className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                  </div>
                </div>
                <br />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
