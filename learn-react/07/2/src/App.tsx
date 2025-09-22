import { useState } from "react";
import Child from "./components/Child";

export default function App() {
  // let cnt = 0;
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          // cnt += 1;
          setCount((count) => count + 1);
        }}
      >
        증가
      </button>
      <Child />
    </>
  );
}
