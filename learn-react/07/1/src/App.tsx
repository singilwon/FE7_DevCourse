import Count from "./components/Count";
// const [상태변수, 액션(리듀서)발생함수] =  useReducer(리듀서함수, 초깃값)
import { useReducer } from "react";
import Form from "./components/Form";

// 리듀서 함수 -> 상태 업데이트 로직이 담겨 있는 함수
//
type State = number;
export type Action = {
  type: "INCREMENT" | "DECREMENT" | "RESET";
};
function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

export default function App() {
  // countDispatch({type: 'increment'})
  const [count, countDispatch] = useReducer(reducer, 0);
  return (
    <>
      <Count count={count} dispatch={countDispatch} />
      <Form />
      {/* <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => countDispatch({ type: "RESET" })}>0</button>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>증가</button> */}
    </>
  );
}
