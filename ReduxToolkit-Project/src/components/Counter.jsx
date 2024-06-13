import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOne, subOne, addAnyNumber, incrementAsync } from "../Reducers/CounterSlice";

function Counter() {

    const count = useSelector((state) => state.counter.value )
    const dispatch = useDispatch();


  return (
    <>
      <div className="flex justify-center items-center pt-10">
        <h1 className="text-5xl">Counter : <span>{count}</span> </h1>
      </div>
      <div className="flex justify-center items-center gap-5 pt-10">
        <button onClick={()=> dispatch(addOne())} className="px-5 py-1 bg-transparent border border-white">+</button>
        <button onClick={()=> dispatch(addAnyNumber(5))} className="px-5 py-1 bg-transparent border border-white">Increment by 5</button>
        <button onClick={()=> dispatch(incrementAsync(5))} className="px-5 py-1 bg-transparent border border-white">Async Increment by 5</button>
        <button onClick={()=> dispatch(subOne())} className="px-5 py-1 bg-transparent border border-white">-</button>
      </div>
    </>
  );
}

export default Counter;
