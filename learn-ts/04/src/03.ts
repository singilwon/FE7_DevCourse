{
  // 인덱스 접근 타입
  // 객체 타입에서 특정 키를 사용해 그 키의 값 타입을 추출하는 문법
  // 런타임에서 객체의 속성으로 값을 꺼내듯이, 타입차원에서 타입 속성으로 값의 타입을 꺼내는 것

  type Person = {
    name: string;
    age: number;
  };

  type NameType = Person["name"]; // string이나 마찬가지
  type AgeType = Person["age"]; // number나 마찬가지
  type NameAndAge = Person["name" | "age"]; // 둘 다 꺼내오는 것
}

{
  // 이런 식으로 추가적인 가공을 해서 새롭게 뽑아낼 수 있다(값을)
  // const enum은 이게 안됨, 남아있는 Status enum이 없어서
  // 그래서 추가적인 연계성은 const가 좋지 않고, 일반 enum을 써야 함
  enum Status {
    Pending = "PENDING",
    Success = "SUCCESS",
    Fail = "FAIL",
  }

  const options = Object.values(Status).map((value) => ({
    label: value,
    value,
  }));
  console.log(options);
}

{
  // const 단언
  // 값을 -> 리터럴
  // 객체의 속성의 값을 -> readonly
  let x = "Hello" as const;
  const numArr = [1, 2, 3] as const;
  const obj = {
    name: "kim",
    age: 20,
  } as const;
}

{
  // const enum과 일반 enum의 장점들만 가져오려고 한 방법
  const Status = {
    Pending: "PENDING",
    Success: "SUCCESS",
    Fail: "FAIL",
  } as const;

  // keyof 는 키 값을 빼오는 것
  type Status = (typeof Status)[keyof typeof Status];
  const options = Object.values(Status).map((value) => ({
    label: value,
    value,
  }));
  console.log(options);
}
