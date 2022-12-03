import React, { useContext } from "react";
import { useState } from "react";
import { Counter_Context } from "../../App";

export default function Child() {
  const { counter, setCounter } = useContext(Counter_Context);
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">Child Counter</div>
          <p className="text-gray-700 text-base">{counter}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <button
            onClick={counter > 0 ? () => setCounter(counter - 1) : counter}
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
          >
            Decrement
          </button>
          <button
            onClick={() => setCounter((preCounter) => preCounter + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
