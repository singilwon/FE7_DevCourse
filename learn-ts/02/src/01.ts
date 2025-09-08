// 함수 타입 지정하는 방법
// 함수의 매개 변수와 반환 값의 타입을 지정하는 것
{
  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }
  sum(10, 20);

  // 반환값 자동으로 추론됨, 근데 매개변수 타입추론은 불가
  function concat(str1: string, str2: string) {
    return str1 + str2;
  }
  concat("Hello", "Sucoding");

  function printValue(value: string): void {
    console.log(value);
  }

  function throwError(msg: string): never {
    throw new Error(msg);
  }

  // 함수 표현식
  // (1) - 함수 표현식의 타입을 지정하는 방법
  const suma = function sum(n1: number, n2: number): number {
    return n1 + n2; // number
  };

  // (2) -변수에다가 함수 타입을 지정하는 방법
  // 화살표 함수 활용
  const sumb: (n1: number, n2: number) => number = function sum(n1, n2) {
    return n1 + n2; // number
  };

  // 화살표 함수
  // (1) - 함수 표현식의 타입을 지정하는 방법
  const sumc = (n1: number, n2: number): number => {
    return n1 + n2;
  };
  // (2) -변수에다가 함수 타입을 지정하는 방법
  const sumd: (n1: number, n2: number) => number = (n1, n2) => {
    return n1 + n2;
  };

  function sume(n1: number, n2?: number): number {
    return n1 + (n2 || 0);
  }

  sume(10);
  sume(10, 20);

  // 매개변수가 콜백함수일 때

  function log(msg: string) {
    console.log(msg);
  }
  function printValuea(callback: (msg: string) => void): void {
    callback("Hello");
  }

  // 반환값이 함수이면 반환값에 함수의 타입도 같이 해줘야함
  // function createMultiplier(factor:number):(num:number)=>number {
  //   return (num) => num *factor;
  // }
  // const multiplyByTwo = createMultiplier(2);
  // console.log(multiplyByTwo(5));

  // 화살표 함수로는?
  const multiplyByTwo: (factor: number) => (num: number) => number = (
    factor
  ) => {
    return (num) => num * factor;
  };
}

{
  function sum(...numArr: number[]) {
    return numArr.reduce((acc, cur) => acc + cur, 0);
  }
  sum(1, 2, 3, 4, 5);
}

{
  // 함수 오버로딩
  // 오버로드 시그니처를 활용해서 매개변수와 반환값의 경우의 수를 좁히는 방법
  function sum(a: string, b: string): string;
  function sum(a: string, b: number): string;
  function sum(a: number, b: string): string;
  function sum(a: number, b: number): number;
  function sum(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") return a + b;
    return `${a}+${b}`;
  }
  const num = sum(10, 20);
  const str = sum("A", "B");
  console.log(num, str);
}
