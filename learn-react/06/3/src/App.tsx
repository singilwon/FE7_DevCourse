import Count from "./components/Count";
import CountOutSide from "./components/CountOutSide";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const reset = () => setCount(0);
  const decrement = () => setCount((count) => count - 1);
  return (
    <>
      <Count
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
      <CountOutSide count={count} />
    </>
  );
}
