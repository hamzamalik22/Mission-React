import React, { useContext } from "react";
import { userContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

export const UserDetails = () => {
  const { users } = useContext(userContext);

  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1 className="text-center text-3xl mt-5">UserDetails</h1>
      </div>
      <div className="border w-fit p-3 mt-5 m-auto ">
        <h1 className="text-center text-xl">UserID : {users[id].id}</h1>
        <h1 className="text-center text-xl mt-5">
          UserName : {users[id].username}
        </h1>
        <h1 className="text-center text-xl mt-5">
          UserCity : {users[id].city}
        </h1>
      <button onClick={()=>navigate(-1)} className="px-5 py-2 rounded-sm text-xs mt-3 bg-blue-300">Back</button>
      </div>
    </>
  );
};
