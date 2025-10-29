import { cacheLife, cacheTag } from "next/cache";

export default async function RandomNum() {
  async function getRandomNumber() {
    // 이걸 적으면 fetch 불러오는 방식이랑 관련 없이 캐싱이 됨
    // 중간 또는 맨 위에 해도 가능
    "use cache";
    //이런 식으로 tag 붙이면 데이터를 업데이트할 때 이 테그 붙은 애들 일괄적으로 업데이트 하는 등 그런 식으로 쓰임
    cacheTag("random");
    // 캐시가 유효한 시간, default는 5분
    // cacheLife("default");
    // seconds는 1초, days, weeks 등 있음
    cacheLife("seconds");
    const res = await fetch("http://localhost:4000/random");
    const randomNumber = await res.json();
    return randomNumber;
  }
  const randomNumber = getRandomNumber();
  return (
    <>
      <h1>{randomNumber}</h1>
    </>
  );
}
