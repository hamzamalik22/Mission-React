import React from "react";

function Navbar({data}) {
  return (
      <div className="navbar w-full px-10 flex justify-between items-center h-16">
        <h1 className="text-orange-600 text-lg font-bold">Orange</h1>
        <h2 className="px-2 shadow-lg py-1 rounded-lg text-xs text-white bg-orange-600">
          Favourites &nbsp;
          <span className="py-1 px-2 bg-[#dadada8b] rounded-full">
            {data.filter(item => item.favourite).length}
          </span>
        </h2>
      </div>
  );
}

export default Navbar;
