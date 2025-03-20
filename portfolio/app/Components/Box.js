import React from "react";

const Box = () => {
  const det = ["Work", "Services", "About", "Plans"];

  return (
    <div className="flex justify-center space-x-4 flex-wrap space-y-4 ">
      {det.map((item, index) => (
        <div
          key={index}
          className="bg-slate-400 rounded-2xl w-44 h-52 flex justify-center items-center"
        >
          <div className=" flex-col justify-center items-center">
            <div className="bg-purple-400 w-24 h-24 rounded-lg"></div>
            <span className="pt-4 text-black font-bold text-lg text-center flex justify-center">
              {item}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box;
