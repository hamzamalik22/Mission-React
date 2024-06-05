import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../utils/Context";

function Services() {
  const {users, setUsers} = useContext(userContext);

  return (
    <>
      <div className="">
        <h1 className="text-3xl mt-5 text-center">Subscribers List</h1>
      </div>

      <div className="mt-5 items-center flex flex-col gap-3">
        {users.map((u) => (
          <Link className="px-3 py-2 bg-orange-400" to={`/services/${u.id}`}>{u.id + 1}. {u.username}</Link>
        ))}
      </div>
    </>
  );
}

export default Services;
