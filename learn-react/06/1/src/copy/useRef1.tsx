// current 속성을 가지는 객체를 반환합니다.
// current 속성으로 우리가 원하는 값을 저장할 수도 있고

// 폼 요소를 제어하는 방법
// 제어 컨트롤러(controlled)
// 입력 값이 리액트의 상태에 의해서 제어되는 컴포넌트
// useState + onChange

// 비제어 컨트롤러(uncontrolled)
// 입력값이 DOM 자체에서 관리되는 컴포넌트
// useRef + current

import { useRef } from "react";

// DOM 요소에 접근할 수도 있다.
export default function App() {
  const ref = useRef<HTMLInputElement>(null); // current 속성이 포함된 객체가 반환됨
  const checkboxRef = useRef<HTMLInputElement>(null);
  const maleRef = useRef<HTMLInputElement>(null);
  const femaleRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(ref.current?.value);
    console.log(checkboxRef.current?.checked);
    if (maleRef?.current?.checked) {
      console.log("남성");
    }
    if (femaleRef?.current?.checked) {
      console.log("여성");
    } else {
      console.log("선택X");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="color" ref={ref} />
        <input type="checkbox" ref={checkboxRef} />
        <input type="radio" ref={maleRef} />
        남자
        <input type="radio" ref={femaleRef} />
        여자
        <button type="submit">전송</button>
      </form>
    </>
  );
}
