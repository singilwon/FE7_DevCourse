import { createContext, useState } from "react";
import Page from "./components/Page";

// 전역 상태 관리
// Context API
// Redux Toolkit
// Zustand

// Context API
// 1. 컨텍스트객체를 생성해야함 -> createContext
// 2. 컨텍스트의 범위를 지정해야 함 -> 생성 컨텍스트 이름으로 하는 요소 사이에 범위 지정
// 3. 데이터를 공급 -> 컨텍스트객체에 value 속성 사용
// 4. 사용

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};
// 여기서 제네릭에 | null 안 쓸거면 null 값 대신에 객체의 타입을 다 붙여야됨, 그렇게 되면 값 받을 때 ! 안 써도 됨(널 아님 보장)
// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext<CounterContextType | null>(null); // 컨텍스트 객체 생성
export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);
  return (
    <>
      {/*  범위 지정, page 컴포넌트들의 하위 컴포넌트들을 다 사용할 수 있게 해주는 것 */}
      {/* value 속성에 넣음으로서 데이터 공급 */}
      <CounterContext value={{ count, increment, decrement, reset }}>
        <Page />
      </CounterContext>
    </>
  );
}
