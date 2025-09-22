import { CounterContext } from "../App";
import { useContext } from "react";

export default function CountDisplay() {
  const { count } = useContext(CounterContext)!;
  return (
    <>
      <h1>Count : {count}</h1>
    </>
  );
}
