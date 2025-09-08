// 기본타입 연습문제+

{
  // 1
  // 함수 정의
  const sumAllNumbers = (...arr: number[][]): number[] => {
    return arr.map((cur) => cur.reduce((cur, acc) => cur + acc, 0));
  };

  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}

{
  // 2
  // 함수 정의
  const doubleValue = (a: string | number): number => {
    let b: number = 0;
    if (typeof a === "string") return (b = a.length * 2);
    if (typeof a === "number") return (b = a * 2);
    return b;
  };

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1); // 10
  console.log(result2); // 10
}

{
  // 3
  // 함수 정의
  const multiplyArrays = (arr1: number[], arr2: number[]): number[] => {
    let short: number = 0;
    let newArr: number[] = [];
    arr1.length < arr2.length ? (short = arr1.length) : (short = arr2.length);
    for (let i = 0; i < short; i++) {
      if (typeof arr1[i] === "number" && typeof arr2[i] === "number") {
        newArr.push(arr1[i] * arr2[i]);
      }
    }
    return newArr;
  };

  // 함수 호출
  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]

  const result2 = multiplyArrays([1, 2], [4, 5, 6]);
  console.log(result2); // [4, 10]
}

{
  // 4
  // 함수 정의
  // 못 품
  const intersection = (arr1: number[], arr2: number[]): number[] => {
    let a: number = 0;
    return arr1.map((acc) => {
      if (arr2.includes(acc)) a = acc;
      return a;
    });
  };

  // 함수 호출
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}

{
  //5
  // 함수 정의
  // 못 품
const formatInfo = ...

// 함수 호출
const info = formatInfo({ name: "Alice" });
console.log(info); // "Name: Alice"
}

{
  // 6
  // 함수 정의
const combineStrings = (str1:string,str2:string):string =>{
  return str1 + str2;
}

// 함수 호출
const combined = combineStrings("Hello", "World");
console.log(combined); // "HelloWorld"

}


{
  // 7
const squareArray = (arr:number[]) : number[] => {
  return arr.map((acc) => acc* acc);
}

// 함수 호출
const result = squareArray([1, 2, 3, 4]);
console.log(result); // [1, 4, 9, 16]
}


{
  // 8
  // 함수 정의
const addStringAndNumber = (str:string, num:number) : string => str+num;

// 함수 호출
const result = addStringAndNumber("The number is ", 10);
console.log(result); // "The number is 10"
}

{
  // 9
  // 함수 정의
const compareValues = (num:number, str:string) :string => num>str.length? "Number is larger":"String is larger";

// 함수 호출
const result = compareValues(10, "Hello");
console.log(result); // "Number is larger"
}

{
  // 10
  // 함수 정의
const checkValue = (a:number|string|boolean) : string => {
  let b : string = "";
  if(typeof a === "number") return b = "It's a number";
  if(typeof a === "string") return b = "It's a string";
  if(typeof a === "boolean") return b = "It's a boolean";
  return b;
}

// 함수 호출
const result = checkValue(true);
console.log(result);
}