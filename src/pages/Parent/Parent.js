import React, { useState } from "react";
import Child from "../Child/Child";

export default function Parent() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex items-center justify-center h-[600px]">
      <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10">
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">Parent Counter</div>
            <p className="text-gray-700 text-base">{counter}</p>
          </div>
        </div>
        <Child counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
}
