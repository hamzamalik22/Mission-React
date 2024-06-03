import React from "react";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="w-full h-screen h-max-fit text-[#E69A8DFF] bg-[#5F4B8BFF]">
        <Navbar />
        <Project />
      </div>
    </>
  );
}

export default App;
