import React, { useContext } from "react";
import { useReducer } from "react";
import { useState } from "react";
import { Counter_Context } from "../../App";

export default function Child() {
  const initialState = 0;
  //   const { counter, setCounter } = useContext(Counter_Context);

  const reducer = (state, action) => {
    console.log(action.payload);
    if (action.type === "INCREMENT") {
      return state + action.payload;
    } else if (action.type === "DECREMENT") {
      return state - action.payload;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">Child Counter</div>
          <p className="text-gray-700 text-base">{state}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <button
            onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
