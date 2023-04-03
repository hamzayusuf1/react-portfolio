import { FastAverageColor } from "fast-average-color";
import React, { useRef } from "react";

import weatherApp from "../../../assets/Weather-app.png";
import "./index.css";

const fac = new FastAverageColor();

const projects = [
  {
    id: 0,
    name: "Weather App",
    url: "/images/Weather-app.png",
    link: "https://www.google.com",
  },
  { id: 1, url: "/images/image-product-1.jpeg" },
  { id: 2, url: "/images/Weather-app.png" },
  { id: 3, url: "/images/Weather-app.png" },
];

const Projects = () => {
  return (
    <div className="bg-stone-500 w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-orange-500">
            Projects
          </p>
          <p className=" font-semibold py-4">
            Feel free to check out some of my previous work
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* Weather app project */}
          {projects.map((img) => (
            <div className="img-container">
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