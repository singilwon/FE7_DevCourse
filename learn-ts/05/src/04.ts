{
  // 유틸리티 타입
  // 제네릭을 기반으로 만들어짐
  // 타입스크립트에서 이미 존재하는 타입을 변형하거나 재활용하기 위해서 제공되는 타입 도우미
  // (마치 표준 내장 객체처럼 타입을 다루기 위한 기능이 구현되어져 있는 내장 타입)
}

{
  // interface 뿐만 아니라 enum도 병합이 된다
  interface User {
    name: string;
  }
  interface User {
    age: number;
  }

  // enum
  enum Direction {
    UP,
    DOWN,
  }
}
enum Direction {
  RIGHT = 2,
  LEFT = 3,
}

{
  // 조건부 타입 (삼항 연산자와 비슷함)
  // T extends U? X:Y

  type IsString<T> = T extends string ? "Yes" : "No";
  type A = IsString<string>; // "Yes"
  type B = IsString<number>; // "No"
}
