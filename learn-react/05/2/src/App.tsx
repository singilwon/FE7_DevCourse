// 자바스크립트 변수 선언 키워드
// var, let, const

// 리액트 변수 선언 키워드
// useState()

import { useState } from "react";

export default function App() {
  // 리렌더링
  const [count, setCount] = useState(0); // [상태변수, 상태업데이트함수]
  const handleIncrement = () => {
    setCount(10); // setCount(값)
    setCount((count) => count + 1); // setCount(콜백함수)
  };

  const [name, setName] = useState("");
  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={handleIncrement}>증가</button>
      <h1>Name:{name}</h1>
      <button onClick={() => setName("kim")}>이름변경</button>
    </>
  );
}
