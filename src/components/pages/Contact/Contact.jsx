import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <form
        method="POST"
        action="https://getform.io/f/5625077c-3aaa-4eee-a3d5-e96562b2004e"
        className="flex flex-col max-w-[600px] w-full px-4 mt-10"
      >
        <div className="w-30">
          <p className="font-bold mb-3 text-2xl border-b-3 border-[e8dcdc] text-white ">
            Contact Me
          </p>
        </div>
        <p className="text-paraText mb-2">
          // Send me a message below and I will be happy to respond
        </p>
        <label htmlFor=""></label>
        <input
          className="rounded bg-[#e8dcdc] text-black px-2"
          type="text"
          name="name"
          id=""
          placeholder="What is your name"
        />
        <input
          className="my-4 rounded bg-[#e8dcdc] text-black px-2"
          type="text"
          name="email"
          id=""
          placeholder={`What is your email`}
        />
        <textarea rows={10} className="p-1.5 rounded-sm" name="message" />
        <div className="flex justify-center items-center my-5">
          <button className="transition ease-in-out delay-75 text-white border-2 w-28  hover:translate-y-1 bg-mainRed hover:bg-red-500 border-mainRed hover:border-orange-600  rounded-lg">
            Lets collaborate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
