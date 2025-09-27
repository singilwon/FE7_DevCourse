import { useConfigureStore } from "../stores/configureStore";
import { useCounterStore } from "../stores/counterStore";

export default function CountDisplay() {
  const count = useCounterStore((state) => state.count);
  const theme = useConfigureStore((state) => state.theme);
  return (
    <>
      <h1>Count : {count}</h1>
      <h1>Configure : {theme}</h1>
    </>
  );
}
