// useEffect 훅
// 컴포넌트의 사이드 이펙트를 처리하기 위한 훅

// 데이터 가져오기, DOM 조작, 이벤트 등록/ 해제, 타이머 설정/ 해제 ...
// 실제 렌더링을 위한 동작을 제외한, 모든 나머지 코드들을 사이드 이펙트

import { useState, useEffect } from "react";
import Interval from "../components/Interval";

// 생명주기
// 컴포넌트 생성, 수정, 삭제 기준으로 동작하기 때문

export default function App() {
  const [count, setCount] = useState(0);
  // 컴포넌트가 생성될 때 코드를 실행
  // 컴포넌트가 수정될 때 코드를 실행
  // 컴포넌트가 삭제될 때 코드를 실행
  useEffect(() => {
    // 사이드 이펙트를 처리하기 위한 코드를 작성
    return () => {
      // 컴포넌트가 삭제될 때 호출되는 함수
    };
  }, [count]); // 빈 배열이면 컴포넌트가 생성될 때 1회만 실행됨
  // 근데 이렇게 넣으면 상태가 변화할 때마다 계속 호출됨
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => count + 1}>증가</button>
      {count === 0 && <Interval />}
    </>
  );
}
