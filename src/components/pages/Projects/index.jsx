import { FastAverageColor } from "fast-average-color";
import React, { useRef, useContext } from "react";

import weatherApp from "../../../assets/Weather-app.png";
import "./index.css";
import { PortContext } from "../../../App";

const projects = [
  {
    id: 0,
    name: "Weather App",
    url: "/images/Weather-app.png",
    link: "https://www.google.com",
  },
  {
    id: 1,
    url: "/images/todo-app.png",
    name: "React-Todo-App",
    link: "https://todo-app1f50.netlify.app/",
  },
  {
    id: 2,
    url: "/images/ecommerce-app.png",
    name: "Ecommerce Page",
    link: "https://ecommerce-page.onrender.com/",
  },
  {
    id: 3,
    url: "/images/calc-app.png",
    name: "Calculator App",
    link: "https://calculator-app-s2yr.onrender.com",
  },
  {
    id: 4,
    url: "/images/weather-dash.png",
    name: "Weather Dashboard",
    link: "https://weather-page.onrender.com",
  },
];

const Projects = () => {
  const { nav, setNav } = useContext(PortContext);
  return (
    <div className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full overflow-hidden">
        <div className="pb-8 px-3">
          <p className="text-4xl font-bold border-b-4 border-orange-500">
            Projects
          </p>
          <p className=" font-semibold py-4">
            Feel free to check out some of my previous work
          </p>
        </div>

        {/* Container */}
        <div className=" flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-hidden">
          {/* Weather app project */}
          {projects.map((img) => (
            <div className={nav ? "img-container hide" : "img-container"}>
              <img src={img.url} alt="background" />
              <div className="img-overlay">
                <div className="title">{img.name}</div>
                <a href={img.link}>
                  <button className="btn">Open App</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
