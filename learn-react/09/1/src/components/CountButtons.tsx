import { useConfigureStore } from "../stores/configureStore";
import { useCounterStore } from "../stores/counterStore";

export default function CountButtons() {
  //   const increment = useCounterStore((state) => state.increment);
  //   const decrement = useCounterStore((state) => state.decrement);
  //   const reset = useCounterStore((state) => state.reset);
  //   const incrementByAmount = useCounterStore((state) => state.incrementByAmount);
  const isDark = useConfigureStore((state) => state.setIsDark);
  const isLight = useConfigureStore((state) => state.setIsLight);
  const { increment, decrement, reset, incrementByAmount } = useCounterStore();
  return (
    <>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => incrementByAmount(10)}>(+10)증가</button>

      <button onClick={isDark}>Dark</button>
      <button onClick={isLight}>Light</button>
    </>
  );
}
