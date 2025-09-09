// 인터페이스 연습문제

{
  // 1
  interface Person {
    name: string;
    age: number;
  }
}

{
  // 2
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }
}

{
  // 3
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }
}

{
  // 4
  interface Team {
    name: string;
    members: string[];
  }
}

{
  // 5
  interface Dog {
    breed: string;
  }

  interface Animal extends Dog {
    name: string;
    age: number;
  }
}

{
  // 6
  interface Person {
    name: string;
    age: number;
    greet(): string;
  }

  const person: Person = {
    name: "sucoding",
    age: 60,
    greet() {
      return `Hello, my name is ${name}`;
    },
  };
}

{
  // 7
  interface Circle {
    redius: number;
  }
  interface Rectangle {
    width: number;
    height: number;
  }
  interface Shape extends Circle, Rectangle {
    area(): void;
  }
}

{
  // 8
  interface Person {
    name: string;
    age: number;
  }

  interface Address {
    street: string;
    city: string;
    zipcode: string;
  }

  const Contact: Person & Address = {
    name: "song",
    age: 60,
    street: "where",
    city: "seoul",
    zipcode: "code",
  };
}

{
  // 9
  interface Dictionary {
    [key: string]: string;
  }
}

{
  // 10
  interface Operation {
    (a: number, b: number): number;
  }

  const add: Operation = (a, b) => a + b;
  const subtract: Operation = (a, b) => a - b;
}
