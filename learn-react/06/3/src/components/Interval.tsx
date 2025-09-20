import { useEffect } from "react";
export default function Interval() {
  // 클린업 함수
  // 컴포넌트가 제거될 때, 정리하는 코드를 작성할 수 있음

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval코드 실행!");
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("Interval 컴포넌트 제거됨");
    };
  }, []);
  return (
    <>
      <h1>Interval Component</h1>
    </>
  );
}
