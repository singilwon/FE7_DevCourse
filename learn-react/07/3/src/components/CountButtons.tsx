import { useContext } from "react";
import { CounterContext } from "../App";

export default function CountButtons() {
  const { increment, decrement, reset } = useContext(CounterContext)!;
  return (
    <>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>reset</button>
    </>
  );
}
