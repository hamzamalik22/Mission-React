import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "./store/reducers/UserReducer";

function App() {
  const { users } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  const deleteHandler = (index) => {
    console.log(index);
    dispatch(deleteUser(index));
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-900 text-white">
        <div className="flex justify-center items-center pt-10 flex-col">
          <h1 className="text-4xl border-b-2 border-violet-600">
            Subscribed Users
          </h1>
          <ol className="pt-5">
            {users.map((user, index) => (
              <li key={index} className="list-decimal text-lg text-pink-500">
                {user.name} -{" "}
                <span
                  onClick={() => deleteHandler(index)}
                  className="text-green-500 text-md cursor-pointer"
                >
                  x
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
