import React from "react";
import { MdDeleteForever } from "react-icons/md";

function TaskCard({ task, removeData }) {
  return (
    <>
      {task.map((item, index) => {
        return <div className="relative w-80 h-16 border-2 flex justify-center items-center">
          <p>{item.theTask}</p>
          <span className="absolute left-[-5%] top-[-25%] bg-slate-500 py-1 px-3 rounded-full ">
            {index + 1}
          </span>
          <span onClick={()=>removeData(index)} className="cursor-pointer absolute right-[-5%] top-[-25%] bg-slate-500 py-2 px-2 rounded-full ">
          <MdDeleteForever />
          </span>
        </div>;
      })}
    </>
  );
}

export default TaskCard;
