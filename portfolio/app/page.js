import React from "react";
import Box from "./Components/Box";

const page = () => {
  return (
    <div className="bg-neutral-500 sm:h-screen flex justify-center items-center">
      <div className="bg-gray-300 w-screen sm:h-[93vh]    rounded-2xl m-10 sm:m-x-4flex flex-col">
        <div className="flex justify-center text-3xl pt-2">CodeX</div>
        <div className="flex justify-center text-3xl pt-40 font-bold text-center">
          Design and Development Partner For{" "}
        </div>
        <div className="flex justify-center text-3xl pt-1 pb-16 text-gray-400 font-bold  text-center">
          Product-led Founders
        </div>

        <Box />
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
