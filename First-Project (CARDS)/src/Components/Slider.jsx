import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

function Slider() {
  const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen bg-zinc-100 flex justify-center items-center">
      <div className="flex relative w-80 h-56 bg-zinc-300 rounded-md overflow-hidden">
        <img
          className={`w-full h-full transition duration-500 ease-in-out object-cover shrink-0 ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } `}
          src="https://images.unsplash.com/photo-1636576109679-6f23fdc040c8?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`w-full h-full object-cover transition duration-500 ease-in-out shrink-0 ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } `}
          src="https://images.unsplash.com/photo-1714329781250-64b9125f689c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <span
          onClick={() => setVal(() => !val)}
          className="absolute cursor-pointer flex justify-center items-center rounded-full w-10 h-10 bg-[#dadada8b] left-1/2 bottom-1 transform -translate-x-[50%] -translate-y-[50%]"
        >
          {val === false ? <FaArrowRightLong /> : <FaArrowLeftLong />}
        </span>
      </div>
    </div>
  );
}

export default Slider;
