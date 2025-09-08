// 함수타입 연습문제

{
  // 1
  // 함수 정의
  const add = (a: number, b: number): number => {
    return a + b;
  };

  // 함수 호출
  const result = add(10, 5);
  console.log(result); // 15
}

{
  // 2
  // 함수 정의
  const greet = (str: string): string => {
    return `Hello, ${str}`;
  };

  // 함수 호출
  const greeting = greet("Alice");
  console.log(greeting); // "Hello, Alice!"
}

{
  // 3
  // 함수 정의
  const sumAll = (...arr: number[]): number => {
    return arr.reduce((acc, cur) => acc + cur, 0);
  };

  // 함수 호출
  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10
}

{
  //4
  // 함수 정의
  const sum = (num: number, b = 0): number => num + b;
  // 함수 호출
  const result = sum(5);
  console.log(result); // 5
}

{
  //5
  // 함수 정의
  const multiply = (a: number, b: number): number => {
    return a * b;
  };

  // 함수 호출
  const product = multiply(4, 5);
  console.log(product); // 20
}

{
  //6
  // 함수 정의
  const concatStringAndNumber = (str: string, num: number): string => {
    return str + num;
  };

  // 함수 호출
  const result = concatStringAndNumber("Hello", 10);
  console.log(result); // "Hello10"
}

{
  //7
  // 함수 정의
  const greet = (a: string, b?: string): string => {
    return a + " " + (b || "Welcome");
  };

  // 함수 호출
  const greeting1 = greet("Alice", "Hello");
  const greeting2 = greet("Bob");
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"
}

{
  // 8
  // 함수 정의
  const findMax = (arr: number[]) => {
    let max = 0;
    arr.forEach((cur) => (cur > max ? (max = cur) : ""));
    // return Math.max(...arr);
    return max;
  };

  // 함수 호출
  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40
}

{
  // 9
  // 함수 정의
  const double = (num: number): number => {
    return 2 * num;
  };

  // 함수 호출
  const doubled = double(10);
  console.log(doubled); // 20
}
