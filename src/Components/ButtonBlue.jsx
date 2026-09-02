import React from "react";

const ButtonBlue = ({ text }) => {
  return (
    <>
      <button className=" bg-skyBlue text-white py-5 font-semibold px-12 rounded-lg border border-transparent font-raleway hover:text-skyBlue hover:bg-transparent hover:border-skyBlue duration-300 ease-in-out ">
        {text}
      </button> 
    </>
  );
};

export default ButtonBlue;
