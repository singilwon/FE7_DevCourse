// 제네릭
// 제네릭은 타입을 미리 지정하지 않고, 사용하는 시점에 타입을 정의해서 쓸 수 있는 문법
// 코드의 재사용성을 높이고, 다양한 타입에 대해 하나의 함수나 클래스를 작성할 수 있게 도와줍니다.
// 치환, 어떤 변수가 값으로 변경되는 것

// T = Type(가장 일반적인 타입 변수)
// K = Key(객체의 키)
// V = Value(객체의 값)
// E = Element(배열의 요소나 이벤트)
// U = Another Type( T이외의 만만하면 U)
{
  // 함수의 제네릭
  function getFirstElement<T>(arr: T[]): T {
    // 실제로는 function getFirstElement<number>(arr:number[]):number[] 가 되는 것
    return arr[0]!;
    // null 아님을 보장하는 널 아님 보장 연산자(뒤에 !를 붙이면 됨) -> 그렇게 되면 반환타입에 | undefined 안 써줘도 됨
  }

  console.log(getFirstElement<number>([1, 2, 3])); // 1
  console.log(getFirstElement<string>(["A", "B", "C"])); //"A"
  console.log(getFirstElement<boolean>([true, false]));
}

{
  // 제네릭도 타입 추론이 된다는 것
  // 타입 명시가 필요하지 않으면, 타입 추론을 활용하는 것을 권장
  function identity<T>(value: T): T {
    return value;
  }

  const num = identity(42);
  const str = identity<string>("A");
  const bool = identity<boolean>(true);
}

{
  // 객체인 경우
  // 제네릭은 2개 이상 쓸 수도 있음
  function mergeObj<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  // 이렇게 생략 안 하면 가독성이 너무 떨어짐
  const mer1 = mergeObj<{ name: string }, { age: number }>(
    { name: "kim" },
    { age: 20 }
  );
  // 그래서 문제가 안되면 이렇게 타입 추론을 쓰는 게 좋음
  const mer2 = mergeObj({ name: "kim", age: 20 }, { gender: "male" });
}

{
  // 타입 제약
  // 제네릭의 타입을 제한하는 문법
  // T extends U, 반환값도 신경 써야 함
  function sumArray<T extends number>(arr: T[]): number {
    return arr.reduce((acc, cur) => acc + cur, 0);
  }
}

{
  // length 가 정확히 number로 넘어오는 애들만 가능하다는 제약
  function returnLength<T extends { length: number }>(arr: T[]): number {
    return arr.length;
  }
  returnLength(["a", "b", "c"]);
}

{
  // 이런 식으로 많고 적을 수도 있는데, 구조적 타이핑이 적용되어 name, age만 보장되면 통과가 됨
  function logKey<T extends { name: string; age: number }>(person: T): void {
    console.log(`${person.name}, ${person.age}`);
  }
  logKey({ name: "kim", age: 60, gender: "male" });
}

{
  // 인터페이스 제네릭
  interface Box<T extends number | string> {
    value: T;
    getValue(): T;
  }
  const stringBox: Box<string> = {
    value: "kim",
    getValue() {
      return this.value;
    },
  };
  const numberBox: Box<number> = {
    value: 10,
    getValue() {
      return this.value;
    },
  };
}

{
  class Box<T extends { id: number }> {
    private items: T[] = [];
    add(item: T) {
      this.items.push(item);
    }
    getAll(): T[] {
      return this.items;
    }
  }
  const stringBox = new Box<{ id: number; name: string }>();
  stringBox.add({ id: 1, name: "kim" });
  console.log(stringBox.getAll());
}
