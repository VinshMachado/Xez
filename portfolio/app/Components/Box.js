import React from "react";

const Box = () => {
  const det = ["Work", "Services", "About", "Plans"];

  return (
    <div className="flex justify-center space-x-4 flex-wrap space-y-4 ">
      {det.map((item, index) => (
        <div
          key={index}
<<<<<<< HEAD
          onMouseEnter={console.log("hello")}
          className="bg-white hover:w-64 hover:h-80 rounded-2xl w-60 h-72 flex justify-center hover:shadow-purple-300 items-center shadow-gray-400 shadow-lg"
        >
          <div className=" flex-col justify-center items-center">
            <div className="bg-gray-400 w-24 h-24 rounded-lg ">
              <img src="./rocket.gif"></img>
            </div>
            <span className="pt-4 text-black font-bold text-2xl text-center flex justify-center">
=======
          className=" group bg-white transform hover:translate-y-[-12px] ease-in duration-[250ms] rounded-2xl w-60 h-72 flex justify-center hover:shadow-purple-300 items-center shadow-gray-400 shadow-lg"
        >
          <div className=" flex-col justify-center items-center">
            <div className="group-hover:scale-110 ease-in-out duration-200 bg-gray-400 w-24 h-24 rounded-lg"></div>
            <span className=" pt-4 text-black font-bold text-2xl text-center flex justify-center">
>>>>>>> 11aab7ec7ce105a2665bdcb7318c0a3b971d7594
              {item}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box;
