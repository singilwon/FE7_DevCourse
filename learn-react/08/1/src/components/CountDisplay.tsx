import { useContext } from "react";
import { CounterContext } from "../contexts/counter/CounterContext";
import { ConfigContext } from "../contexts/configure/configureContext";

export default function CountDisplay() {
  const { count } = useContext(CounterContext)!;
  const { theme } = useContext(ConfigContext)!;
  return (
    <>
      <h1>Count : {count}</h1>
      <h1>{theme}</h1>
    </>
  );
}
