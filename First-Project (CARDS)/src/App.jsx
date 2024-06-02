import React, { useState } from "react";
import Card from "./Components/Card";
import States from "./Components/States";
import Slider from "./Components/Slider";
import PropsPractice from "./Components/PropsPractice";
import PropsAdvanced from "./Components/PropsAdvanced";
import MiniProject from "./Components/MiniProject";

function App() {

  // const raw = [
  //   {
  //     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Maya",
  //     profession: "Programmer",
  //     friend : false,
  //   },
  //   {
  //     image:
  //       "https://www.aljazeera.com/wp-content/uploads/2024/03/AP23116421466279-1711875056.jpg?resize=1800%2C1800",
  //     name: "Babar Azam",
  //     profession: "The King",
  //     friend : false,
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Sarah",
  //     profession: "Full Stack Developer",
  //     friend : true,
  //   },
  // ];

  // const [data, setData] = useState(raw);

  // const HandleClick = (ChangingIndex) =>{
  //   setData((prev)=> {
  //     return prev.map((item, index) =>{
  //       if(index === ChangingIndex) return {...item, friend : !item.friend};
  //       return item;
  //     })
  //   })
  // }




  return (
    <>
      {/* <Card /> */}

      {/* <States /> */}

      {/* <Slider /> */}

      {/* <PropsPractice title = 'Available' color = 'bg-green-300'  /> */}

      {/* <PropsPractice title = 'Unavailable' color = 'bg-red-300' /> */}

      {/* <PropsPractice title = 'Download' color = 'bg-blue-300' /> */}

      {/* <div className="w-full h-screen gap-10 bg-zinc-300 flex justify-center items-center">

        {data.map((item, index)=> (
          <PropsAdvanced key={index} index={index} values={item} HandleClick={HandleClick} />
        ))}


      </div> */}


          <MiniProject />



    </>
  );
}

export default App;
