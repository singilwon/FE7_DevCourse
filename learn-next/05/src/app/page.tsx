// Next.js의 데이터 패칭
// axios X
// >>> fetch <<<
// fetch : 웹 표준 API에서 제공하는 함수 - 웹 브라우저에서만 사용 가능한 것
// - 클라이언트 전용 함수
// Next.Js 팀이 fetch() 함수를 확장하여 Next.JS의 시스템이 녹아들어질 수 있도록 확장하여 제공하고 있기 때문
// 그래서 react에서 쓰는 fetch랑 다른 것임

import RandomNumber from "@/components/RandomNumber";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("http://localhost:4000/random");
  const number = await res.json();
  return (
    <>
      <RandomNumber number={number} />
    </>
  );
}
