import React from "react";

const Boxframe = (props) => {
  return (
    <div className=" group bg-white transform hover:translate-y-[-12px] ease-in duration-[250ms] rounded-2xl w-60 h-72 flex justify-center hover:shadow-purple-300 items-center shadow-gray-400 shadow-lg">
      <div className=" flex-col justify-center items-center">
        <div className="group-hover:scale-110 ease-in-out duration-200 bg-gray-400 w-24 h-24 rounded-lg"></div>
        <span className=" pt-4 text-black font-bold text-2xl text-center flex justify-center">
          {props.name}
        </span>
      </div>
    </div>
  );
};

export default Boxframe;
