import logo from "./logo.svg";
import "./App.css";
import Parent from "./pages/Parent/Parent";
import { createContext, useState } from "react";

export const Counter_Context = createContext();

function App() {
  const [counter, setCounter] = useState(0);
  const value = { counter, setCounter };
  return (
    <Counter_Context.Provider value={value}>
      <div>
        <Parent />
      </div>
    </Counter_Context.Provider>
  );
}

export default App;
