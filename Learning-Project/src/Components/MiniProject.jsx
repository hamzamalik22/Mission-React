import React, { useState } from "react";
import MiniProjectCard from "./MiniProjectCard";
import Navbar from "./Navbar";

function MiniProject() {
  const music = [
    { name: "Baloo Batiyan", artist: "Ali Zafar", favourite: false },
    { name: "Bado Badi", artist: "Chahat Fateh Ali Khan", favourite: false },
    { name: "Sang e Mah", artist: "Atif Aslam", favourite: false },
    { name: "Cheque", artist: "Shubh", favourite: false },
    { name: "295", artist: "Sidhu Moosewala", favourite: false },
    { name: "Alone 2.0", artist: "Alan Walker", favourite: false },
  ];


  const [data, setData] = useState(music);

  const HandleFavourite = (outerIndex) => {
    setData((prev)=>{
      return prev.map((item, index)=>{
        if(index === outerIndex) return {...item, favourite : !item.favourite};
        return item;
      })
    })
  }


  return (
    <main className="bg-zinc-100">

     <Navbar data={data} />

      <div className="w-full h-fit px-4 py-6 flex gap-6 flex-wrap">
        {data.map((item, index) => (
          <MiniProjectCard key={index}  HandleFavourite={HandleFavourite} index={index} values={item}  />
        ))}
      </div>
    </main>
  );
}

export default MiniProject;
