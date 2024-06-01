import React, { useState } from "react";

function States() {
  const [val, setVal] = useState(false);

  const [myVal, setMyVal] = useState({name : 'Hamza', isAllowed : true})

  const [theVal, setTheVal] =  useState([1,2,3,4,5,6]);

  return (
    <div className="p-4">
      <div className="state">
        <h1>Status : {val.toString().toUpperCase()}</h1>
        <button
          onClick={() => setVal(!val)}
          className="mt-2 py-2 px-3 bg-blue-300 text-xs rounded hover:bg-blue-600 hover:text-zinc-100"
        >
          Change Status
        </button>
      </div>

      <br />

      <div className="state">
        <h1>Name : {myVal.name.toString().toUpperCase()}</h1>
        <h1>Status : {myVal.isAllowed.toString().toUpperCase()}</h1>
        <button
          onClick={ ()=> setMyVal({...myVal, isAllowed : !myVal.isAllowed})}
          className={`mt-2 py-2 px-3 ${myVal.isAllowed ? 'bg-blue-300' : 'bg-red-300'} text-xs rounded cursor-pointer`}
>
          Change Status
        </button>
      </div>

      <br />

      <div className="state">
        <h1 className="pl-6">{ theVal.map(item => <h1>{item}</h1> ) }</h1>
        <button
          onClick={ () => setTheVal(() => theVal.filter((item, index)=> index != theVal.length - 1))}
          className={`mt-2 py-2 px-3 bg-red-300 text-xs rounded cursor-pointer`} >
          Delete
        </button>
      </div>

    </div>
  );
}

export default States;
