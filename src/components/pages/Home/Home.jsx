import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full h-screen bg-backgroundBlue mt-36">
      <div className="mx-auto max-w-[1000px] top-[35%] left-40 px-8 md:absolute h-fit">
        {/* max-w-[1000px] px-8 mx-auto flex flex-col h-full fixed top-[35%] left-[25%] */}
        <div className="">
          <p className="text-stone-100 text-2xl">Hello 👋</p>
          <h1 className=" text-4xl sm:text-6xl text-white">
            I'm <span className="text-mainRed">Hamza Yusuf</span>
          </h1>
          <div>
            <ul className="usedTech flex my-2">
              <li className="flex justify-start">React.Js</li>
              <li>Tailwind.css</li>
              <li>Javascript</li>
            </ul>
          </div>
          <p className="text-2xl para text-[#A7B0B2]">
            I enjoy making full-stack interactive applications. Improving at my
            craft has always been the priority for me as I love to code!
          </p>
          <div className="flex gap-10 items-center">
            <a href="https://docs.google.com/document/d/1Ac-lnC2LEbrH9oXJMZ6OwEDtFrlUtdziEjLw5XOoPsM/edit?usp=sharing">
              <button className="group text-stone-200 rounded-md bg-mainRed flex items-center my-3 px-4 py-2 hover:bg-red-500 hover:border-orange-600 w-[150px] justify-center">
                Resume
              </button>
            </a>
            <a href="/projects">
              <button className="group text-stone-200 border-2 flex items-center my-3 px-4 py-2  w-[150px] justify-center hover:bg-btnBlue">
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
