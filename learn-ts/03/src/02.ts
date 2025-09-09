{
  // 타입별칭
  // 나만의 커스텀 타입을 만들 수 있는 방법 제공
  // 관례 : 항상 type 변수의 첫 글자를 대문자로 함
  type Person = {
    name: string;
    age: number;
    gender: string;
  };

  const user1: Person = {
    name: "kim",
    age: 20,
    gender: "male",
  };

  const user2: Person = {
    name: "kim",
    age: 20,
    gender: "male",
  };

  const user3: Person = {
    name: "kim",
    age: 20,
    gender: "male",
  };
}

{
  // 1. 기본 타입 별칭
  type ID = string | number;
  const userId: ID = "teacher-kim";
  const productId: ID = 1;
}

{
  // 2. 객체 타입 별칭
  type User = {
    name: string;
    readonly age?: number; // readonly, ? 가능
    [key: string]: string | number;
  };
  const per1: User = {
    name: "kim",
    age: 20,
  };
}

{
  // 3. 함수 타입 별칭
  type AddFun = (a: number, b: number) => number;
  const add: AddFun = (a, b) => a + b;
}

{
  // 4. 튜플 타입 별칭
  type Point = [number, number];
  const point: Point = [10, 20];
}

{
  // 5. 인터섹션 타입 별칭(타입 확장)
  // 5.1 유니온 타입
  // 5.2 인터섹션 타입
  type StringID = string;
  type NumberID = number;
  type ID = StringID | NumberID; // string | number;

  type Nameable = {
    name: string;
  };

  type Ageable = {
    age: number;
  };
  type Person = Nameable & Ageable; // name, age 모두 가지고 있는 type이 됨
}

{
  // 6. 리터럴 타입
  type Direction = "UP" | "RIGHT" | "LEFT" | "DOWN";
  const direct: Direction = "LEFT";
}
