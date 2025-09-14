## unknown, 타입단언, enum

### any and unknown

- any : 아무 값이나 대입, 사용할 수 있어 타입 검사를 우회하는 특수한 타입
  - 위험한 것이기 때문에 좀 더 안전한 게 필요
- unknown - 알 수 없는 타입(안전한 any, 유연한 any)

### 타입 단언

- 개발자가 타입스크립트 컴파일러보다 타입을 더 잘 알고 있을 때 사용
- 개발자가 타입을 정의하고 보장하는 것
- 예시
  ```
  let x:unknown;
  x = 10.12;
  (x as number).toFixed(1);
  // or
  (<number>x).toFixed(1); // 리액트에서 안 씀, JSX문법과 충돌
  ```
  - 이런 식으로 단언을 해놓으면 뒤에 메서드도 자동으로 나오는 게 가능해짐
  - DOM, event 코드에서도 as Element 같은 코드를 querySelector 뒤에 붙여줘야지 event 같은 기능을 쓰려고 할 때 가능함(html에 그게 없을수도 있다는 가정을 TS에서 해서)

### enum(이넘)

- 고정된 값들의 집합을 정의하는 데 사용하는 특수한 타입
- 코드의 직관성, 가독성을 더 잘 보여줄 수 있음
- 매개변수로 넘겨받는 값이 고정돼 있으면 그 매개변수의 이름을 미리 정의함으로서 불분명한 매개변수 값을 직관성 있게 보여주게 함
- 예시

  ```
    enum CharactermoveX {
    LEFT,
    RIGHT,
  }

  if (direction === RotationMoveX.RIGHT) {
      console.log("오른쪽으로 이동");
    }

  charactermoveX(CharactermoveX.LEFT);
  ```

- 숫자형과 문자형 enum
  - enum 안에서 따로 값을 할당하지 않으면 0부터 시작되고, 중간에 할당하면 그 숫자부터 시작돼서 하나씩 할당됨(숫자형은)
  - 문자형과 혼합형도 가능
- 예시

  ```
    enum Direction {
    UP, // 0
    DOWN = 100, // 1 인데 이렇게 100 할당하면 100 시작
    LEFT, // 2 , 101되고
    RIGHT, // 3 , 102 됨
  }
  console.log(Direction.UP); // 0
  console.log(Direction.DOWN); // 1
  console.log(Direction.LEFT); // 2

  enum Direction {
    UP = "Up",
    DOWN = "Down",
    LEFT = "Left",
    RIGHT = "Right",
  }

    // 혼합형
    enum Direction {
    UP = 200,
    DOWN = "UP",
    LEFT = 300,
    RIGHT = "DOWN",
  }
  ```

- 리버스 매핑(역방향 매핑)

  - 숫자형 이넘에만 지원한 개념
  - console.log(Direction[0]) // "UP" 이렇게 반대로 숫자를 쓰면 매핑되어 있는 이름이 나옴

- const enum
  - 일반 enum과의 차이점 : 일반 enum이 js로 변환되면 복잡해지는데, 그것을 보완하기 위해 나온 것이 const enum
  - 출력을 하면 일반 enum은 함수모양까지 다 남아있지만, const는 남아있지 않고 구현 부분을 없애고 모든 부분을 값으로 inline화 시켜버림
  - 장점 : 컴파일된 사이즈를 줄여줘서 컴파일 시간도 줄어든다
  - 단점 : 역방향 매핑(리버스 매핑)이 안됨

### 그 외

#### 인덱스 접근 타입

- 객체 타입에서 특정 키를 사용해 그 키의 값 타입을 추출하는 문법
- 런타임에서 객체의 속성으로 값을 꺼내듯이, 타입차원에서 타입 속성으로 값의 타입을 꺼내는 것
- 예시

  ```
  type Person = {
    name: string;
    age: number;
  };

  type NameType = Person["name"]; // string이나 마찬가지
  type AgeType = Person["age"]; // number나 마찬가지
  type NameAndAge = Person["name" | "age"]; // 둘 다 꺼내오는 것
  ```

#### const 단언

- 값을 -> 리터럴
- 객체의 속성의 값을 -> readonly
- 일반 : let x = "Hello" as const; 이렇게 뒤에 **as const** 를 쓰면 "Hello"라는 리터럴 값이 됨
- 배열 : const numArr = [1,2,3] as const; 이렇게 쓰면 push, pop 이런 게 됐었지만, readlonly로 바뀌면서 더 이상 그런것도 안됨
- 객체 : 이렇게 하면 객체도 readonly가 됨

  ```
  const obj = {
    name:"kim",
    age:20,
  } as const;

  ```

#### const enum과 일반 enum의 장점만 가져오려고 만든 방법

- 예시

  ```
  // const enum과 일반 enum의 장점들만 가져오려고 한 방법
  const Status = {
    Pending: "PENDING",
    Success: "SUCCESS",
    Fail: "FAIL",
  } as const;

  // keyof 는 키 값을 빼오는 것
  type Status = (typeof Status)[keyof typeof Status];
  console.log(Status.Success);
  ```

- TREE- SHAKING : 쓰이지 않는 불필요한 코드를 빼주는 것, 이것이 const enum의 장점을 가지고 있는 것
