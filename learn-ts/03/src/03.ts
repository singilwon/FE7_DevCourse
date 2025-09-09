{
  // 인터페이스
  // 객체의 타입을 지정할 때 사용하는 타입 지정 방법
  // interface
  // interface 식별자 {}

  type Gender = "male" | "female" | "natural";

  interface Person {
    name: string;
    age: number;
    gender: Gender;
  }

  const person: Person = {
    name: "kim",
    age: 20,
    gender: "male",
  };
}

{
  interface Person {
    name: string;
    age: number;
    // greet : () => void;
    greet(message: string): void; // 이렇게 줄일 수 있음
  }
  const person: Person = {
    name: "kim",
    age: 20,
    greet(message) {
      console.log(`Hello, ${this.name}`);
    },
  };
}

{
  // 자동 병합
  interface Person {
    name: string;
  }

  interface Person {
    // 같은 이름으로 지정하는 게 가능
    age: number;
  }
  const person: Person = {
    name: "kim",
    age: 20,
  };
}

{
  interface Person {
    [key: string]: string | number;
  }
  const person: Person = {
    name: "kim",
    age: 20,
  };
}

{
  // 상속
  interface Person {
    name: string;
    age: number;
  }

  interface Developer extends Person {
    skill: string;
  }

  const developer: Developer = {
    name: "kim",
    age: 20,
    skill: "javascript",
  };
}

{
  // 다중 인터페이스 상속
  interface Flyer {
    fly(): void;
  }

  interface Swimmer {
    swim?(): void;
  }

  interface Bird extends Flyer, Swimmer {
    sound(): void;
  }

  const duck: Bird = {
    fly() {},
    swim() {},
    sound() {},
  };
}
