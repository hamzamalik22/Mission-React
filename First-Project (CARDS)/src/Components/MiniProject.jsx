import React from "react";
import MiniProjectCard from "./MiniProjectCard";

function MiniProject() {
  const music = [
    { name: "", artist: "", favourite: false },
    { name: "", artist: "", favourite: false },
    { name: "", artist: "", favourite: false },
    { name: "", artist: "", favourite: false },
    { name: "", artist: "", favourite: false },
    { name: "", artist: "", favourite: false },
  ];

  return (
    <main className="bg-zinc-100">
        <div className="navbar w-full px-10 flex justify-between items-center h-16">
            <h1 className="text-orange-600 font-bold">Orange</h1>
            <h2 className="px-2 py-1 rounded-lg text-xs text-white bg-orange-600">Favourites <span>3</span> </h2>
        </div>
      <div className="w-full h-screen px-4 py-6 flex gap-6 flex-wrap">
        {music.map((item) => (
          <MiniProjectCard />
        ))}
      </div>
    </main>
  );
}

export default MiniProject;
