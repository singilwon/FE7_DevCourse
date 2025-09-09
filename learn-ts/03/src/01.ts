{
  // 구조적 타이핑
  // 타입의 이름이나 선언이 아니라, 내부의 구조가 같으면 같은 타입으로 간주하는 방식
  // 그래서 이렇게 구조만 같아도 할당이 가능해짐
  // 이렇게 받는 쪽이나 주는 쪽이나 한 쪽이 더 많아도 상관없음, 구조분해할당 생각
  const point: { x: number; y: number; z: 30 } = { x: 10, y: 20, z: 30 };
  const position: { x: number; y: number } = point;

  const fn1: (a: number, b: number) => number = (a, b) => a + b;
  const fn2: (a: number, b: number) => number = fn1;
}

{
  // readonly
  // 수정불가
  const user: {
    readonly name: string;
    readonly age?: number;
  } = {
    name: "kim",
    age: 20,
  };
  // user.name = "park";
  // user.age = 30;
  const numArr: readonly number[] = [1, 2, 3];
  const mixArr: readonly [number, string] = [10, "A"];
}

{
  // 인덱스 시그니처
  // 객체의 키와 값의 타입 패턴을 통해 타입을 정의하는 문법
  const user: {
    [key: string]: string | number;
    // 이게 인덱스 시그니처인데,
    // 키가 문자열이고 값이 문자열인 모든 속성이 올 수 있게 해주는 것
    gender?: string; // 올지도 모르는 속성 때문에 가독성 다운
  } = {
    name: "kim",
    age: 20,
  };

  user.gender = "male";

  const person: {
    name: string;
    gender: string;
  } = {
    name: "kim",
    gender: "male",
  };
}
