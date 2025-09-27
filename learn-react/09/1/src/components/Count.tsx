import { useEffect } from "react";
import { useCounterStore } from "../stores/counterStore";
import CountButtons from "./CountButtons";
import CountDisplay from "./CountDisplay";
export default function Count() {
  useEffect(() => {
    // useCounterStore.subscribe(구독할 상태, 구독중인 상태가 변경되면 호출될 함수)
    useCounterStore.subscribe(
      (state) => state.count,
      (newCount, prevCount) => {
        console.log(`count 변경됨 ${prevCount} -> ${newCount}`);
      }
    );
  });
  return (
    <>
      <CountButtons />
      <CountDisplay />
    </>
  );
}
