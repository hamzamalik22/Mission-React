import React from "react";
import { FaUserFriends } from "react-icons/fa";

function PropsAdvanced({values, index, HandleClick}) {
  const {image, name, profession, friend} = values;
  return (
    <div className="card w-52 h-34 bg-zinc-100 rounded-md overflow-hidden">
      <img
        className="w-full h-56 object-cover"
        src={image}
        alt=""
      />
      <h2 className="px-2 pt-1 text-xl font-semibold">{name}</h2>
      <h5 className="px-2 text-xs ">{profession}</h5>
      <button onClick={()=> HandleClick(index)} className={`px-3 py-1 text-xs ${friend ? 'bg-green-300' : 'bg-blue-300'} m-2 rounded`}>
        {friend === true ? 'Request Sent' : 'Add Friend' }
        {friend === true ? '' : <FaUserFriends className="inline-block relative left-1" />}
      </button>
    </div>
  );
}

export default PropsAdvanced;
