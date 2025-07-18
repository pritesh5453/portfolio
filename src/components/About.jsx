import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "01" },
    { text: "Companies Work", count: "01" },
  ];

  const googleDriveLink =
    "https://drive.google.com/file/d/1i8uLvk5DfKQxbzwNmyj5HCAWZ8d4Q989/view?usp=drive_link";

  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I'm Pritesh Pawar, an enthusiastic IT engineer wi th a strong
                foundation in web development and software testing. I bring a
                creative mindset and a passion for building intuitive,
                responsive, and user-centric interfaces.
                <br />
                During my internship as a Frontend Developer, I gained hands-on
                experience with technologies like Angular, Bootstrap, and
                Firebase. I also explored server-side development using Node.js
                and sharpened my skills in debugging and software testing using
                Selenium and Java.
                <br />
                Beyond Angular, I possess a versatile skill set. I am proficient
                in javascript, TypeScript, React.js, Bootstrap, Firebase, and
                GitHub, ensuring that I am well-equipped to adapt to diverse
                project requirements.
                <br /> I love turning ideas into working web apps that not only
                look good but also deliver a seamless user experience. I'm
                constantly learning, experimenting, and improving — ready to
                contribute meaningfully to your next big project
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600"></span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>
                Check Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
