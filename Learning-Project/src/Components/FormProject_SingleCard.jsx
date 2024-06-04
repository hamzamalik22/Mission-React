import React from "react";

function FormProject_SingleCard({ values, handleRemove }) {
  return (
    <>
      {values.map((item, index) => {
        return <div className="w-44 h-44 bg-zinc-100 flex flex-col justify-center items-center rounded-lg">
          <div className="image w-16 h-16 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={item.image}
              alt=""
            />
          </div>
          <h1 className="font-semibold text-xl tracking-tight">{item.name}</h1>
          <p className="opacity-60 text-xs tracking-tighter">
          {item.email}
          </p>
          <button onClick={()=> handleRemove(index)} className="px-2 py-1 bg-red-600 text-white tracking-tighter text-xs rounded-md mt-2">
            Remove it
          </button>
          <p></p>
        </div>;
      })}
    </>
  );
}

export default FormProject_SingleCard;
