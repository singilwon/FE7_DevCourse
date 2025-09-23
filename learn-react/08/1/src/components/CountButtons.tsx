import { useContext } from "react";
import { CounterActionContext } from "../contexts/counter/CounterContext";
import { ConfigContext } from "../contexts/configure/configureContext";

export default function CountButtons() {
  console.log("CountButtons Rendering");
  const { increment, decrement, reset } = useContext(CounterActionContext)!;
  const { setDarkMode, setLightMode } = useContext(ConfigContext)!;
  return (
    <>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>reset</button>
      <br />
      <button onClick={setDarkMode}>다크모드</button>
      <button onClick={setLightMode}>라이트모드</button>
    </>
  );
}
