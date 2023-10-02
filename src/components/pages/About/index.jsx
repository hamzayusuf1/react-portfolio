import React from "react";

import "./index.css";
import Img1 from "../../../assets/about-pic.png";
import HTML from "../../../assets/html.png";
import CSS from "../../../assets/css.png";
import Javascript from "../../../assets/javascript.png";
import Node from "../../../assets/node.png";
import mongoDB from "../../../assets/mongo.png";
import ReactLogo from "../../../assets/react.png";

const About = () => {
  return (
    <div className="w-full bg-backgroundBlue about-container px-3 text-white">
      <div className="max-w-[1000px] mx-auto container flex flex-col justify-center items-center w-full h-full">
        <div className="text-4xl font-semibold mb-4 border-b-4 border-mainRed">
          About
        </div>
        <div className="w-full md:grid grid-cols-2 p-3">
          <div className="description p-2 flex items-center text-2xl about-description text-paraText text-center mb-3">
            Welcome to my junior software developer portfolio. I'm an emerging
            software engineer looking to share my journey and the projects I've
            worked on so far in my career. In this portfolio, you'll find a
            collection of web and mobile development projects that demonstrate
            my skills and dedication to honing my craft. Thank you for taking
            the time to explore my work, and I'm excited to continue learning
            and growing in the world of software development.
          </div>
          <div className="flex justify-center">
            <img className="w-[340px] h-[440px]" src={Img1} alt="" />
          </div>
        </div>
        <div className="mt-10 p-3">
          <p className="text-4xl font-semibold border-b-4 border-mainRed">
            Skills
          </p>
          <p className="skills">
            Here are examples of the technologies that I have experience with
          </p>
        </div>
        <div className="sm:grid grid-flow-col gap-4 text-center text-2xl">
          <div>
            <img className="w-44 mx-auto md:w-24" src={HTML} alt="html.icon" />
            <p className="my-3">HTML</p>
          </div>
          <div>
            <img className="w-44 mx-auto md:w-24" src={CSS} alt="css.icon" />
            <p className="my-3">CSS</p>
          </div>
          <div>
            <img
              className="w-44 mx-auto md:w-24"
              src={Javascript}
              alt="javascript.icon"
            />
            <p className="my-3">Javascript</p>
          </div>
          <div>
            <img className="w-44 mx-auto md:w-24" src={Node} alt="node.icon" />
            <p className="my-3">Node</p>
          </div>
          <div>
            <img
              className="w-44 mx-auto md:w-24"
              src={mongoDB}
              alt="mongoDB.icon"
            />
            <p className="my-3">MongoDB</p>
          </div>
          <div>
            <img
              className="w-44 mx-auto md:w-24"
              src={ReactLogo}
              alt="react.icon"
            />
            <p className="my-3">React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
