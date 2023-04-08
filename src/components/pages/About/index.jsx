import React from "react";

import "./index.css";
import Img1 from "../../../assets/profile.png";
import HTML from "../../../assets/html.png";
import CSS from "../../../assets/css.png";
import Javascript from "../../../assets/javascript.png";
import Node from "../../../assets/node.png";
import mongoDB from "../../../assets/mongo.png";
import ReactLogo from "../../../assets/react.png";

const About = () => {
  return (
    <div className="h-screen w-full bg-stone-500 about-container px-3">
      <div className="max-w-[1000px] mx-auto container flex flex-col justify-center items-center w-full h-full">
        <div className="text-4xl font-semibold mb-4 border-b-4 border-amber-900">
          About
        </div>
        <div className="w-full grid grid-cols-2">
          <div className="description p-2 flex items-center text-2xl about-description">
            One of the key reasons I am drawn to code is the ability to simplify
            the lives of many by creating software application. My passion has
            driven me to dedicate many hours to grasping new concepts and
            technologies to improve my skill.
          </div>
          <div className="mx-auto">
            <img className="w-100px h-[400px]" src={Img1} alt="" />
          </div>
        </div>
        <div className="mt-10">
          <p className="text-4xl font-semibold border-b-4 border-amber-900">
            Skills
          </p>
          <p className="skills">
            Here are examples of the technologies that I have experience with
          </p>
        </div>
        <div className="grid grid-flow-col gap-4 text-center">
          <div>
            <img className="w-24" src={HTML} alt="html.icon" />
            <p className="my-3">HTML</p>
          </div>
          <div>
            <img className="w-24" src={CSS} alt="css.icon" />
            <p className="my-3">CSS</p>
          </div>
          <div>
            <img className="w-24" src={Javascript} alt="javascript.icon" />
            <p className="my-3">Javascript</p>
          </div>
          <div>
            <img className="w-24" src={Node} alt="node.icon" />
            <p className="my-3">Node</p>
          </div>
          <div>
            <img className="w-24" src={mongoDB} alt="mongoDB.icon" />
            <p className="my-3">MongoDB</p>
          </div>
          <div>
            <img className="w-24" src={ReactLogo} alt="react.icon" />
            <p className="my-3">React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
