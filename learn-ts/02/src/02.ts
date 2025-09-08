{
  // 1. 타입 오퍼레이터
  // 1.1 유니언 타입 -> | (파이프)
  // 1.1.1 의미는 비슷
  // 1.1.2 A 또는 B타입

  // 타입가드(type guard)
  // 런타임에 실제 검사 결과를 바탕으로 변수의 타입을 조금 더 좁게 추론하도록 타입스크립트에 힌트를 주는 문법
  let x: number | string = 10;
  const arr: (string | number)[] = ["A", 10];
  const first = arr[0];
  if (typeof first === "string") {
    console.log(first.toLowerCase());
  }

  // 1.2 인터섹션 타입 -> & (앰퍼샌드)
  // 1.2.1 의미는 비슷
  // 1.2.2 A 타입과 B 타입
  const user: { name: string } & { age: number } = {
    name: "kim",
    age: 20,
  };
}
