import React from "react";
import Box from "./Components/Box";

const page = () => {
  return (
    <div className="bg-neutral-100 sm:h-screen flex justify-center items-center">
      <div className="bg-white  w-screen sm:h-[93vh]  justify-center items-center w-full rounded-2xl m-10 sm:m-x-4flex flex-col shadow-xl">
        <div className="flex justify-center text-3xl mt-10 ">
          <b>Code</b>
          <b className="text-purple-600 text-3xl">X</b>
        </div>
        <div className="flex justify-center sm:text-4xl mt-10 font-bold text-center">
          Design and Development Partner For{" "}
        </div>
        <div className="flex justify-center  sm:text-3xl pt-1 pb-16 text-gray-500  font-bold  text-center">
          Product-led Founders
        </div>
        <div className=" w-full h-auto sm:h-72 ">
          {" "}
          <Box />
        </div>

        <div className="flex justify-center sm:pt-10 pt-15 pb-10  ">
          <button className="bg-black text-white rounded-3xl w-36 h-12 ">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
