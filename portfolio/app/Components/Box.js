import React from "react";

const Box = () => {
  const det = ["Work", "Services", "About", "Plans"];

  return (
    <div className="flex justify-center space-x-4 flex-wrap space-y-4 ">
      {det.map((item, index) => (
        <div
          key={index}
          className="bg-white hover:w-64 hover:h-80 rounded-2xl w-60 h-72 flex justify-center hover:shadow-purple-300 items-center shadow-gray-400 shadow-lg"
        >
          <div className=" flex-col justify-center items-center">
            <div className="bg-gray-400 w-24 h-24 rounded-lg"></div>
            <span className="pt-4 text-black font-bold text-2xl text-center flex justify-center">
              {item}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box;
