import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full h-screen bg-stone-500">
      <div className="max-w-[1000px] mx-auto px-8  flex items-center justify-center h-full">
        {/* max-w-[1000px] px-8 mx-auto flex flex-col h-full fixed top-[35%] left-[25%] */}
        <div className="">
          <p className="text-stone-100 text-2xl">Hello 👋</p>
          <h1 className=" text-4xl sm:text-6xl text-orange-400">
            I'm Hamza Yusuf
          </h1>
          <div>
            <ul className="usedTech flex my-2">
              <li className="flex justify-start">React.Js</li>
              <li>Tailwind.css</li>
              <li>Javascript</li>
            </ul>
          </div>
          <p className="text-2xl para">
            I enjoy making full-stack interactive applications. Improving at my
            craft has always been the priority for me as I love to code!
          </p>
          <div>
            <a href="/projects">
              <button className="group text-stone-200 border-2 flex items-center my-3 px-2 py-1 hover:bg-orange-600 hover:border-orange-600 ">
                View work!
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";

// const Home = () => {
//   return <div>Home</div>;
// };

// export default Home;
