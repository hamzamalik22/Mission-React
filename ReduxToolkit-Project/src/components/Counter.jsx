import React from "react";

function Counter() {
  return (
    <>
      <div className="flex justify-center items-center pt-10">
        <h1 className="text-5xl">Counter : <span>5</span> </h1>
      </div>
      <div className="flex justify-center items-center gap-5 pt-10">
        <button className="px-5 py-1 bg-transparent border border-white">+</button>
        <button className="px-5 py-1 bg-transparent border border-white">Increment by 5</button>
        <button className="px-5 py-1 bg-transparent border border-white">-</button>
      </div>
    </>
  );
}

export default Counter;
