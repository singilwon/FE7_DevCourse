// JS 클래스와 다른 것
// 1. 타입시스템이 제공된다는 것
// 2. 접근 제한자가 지원된다는 것
// 2.1 public,protected, private, readonly
// 2.2 #private가 추가되었지만, 이거랑 다른 것
// 3. 추상클래스, 인터페이스와 결합이 가능한다는 것
{
  // 클래스
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    start(name: string): string {
      return `${name}, start`;
    }
  }
  const benz = new Car(100);
  console.log(benz.speed);
  console.log(benz.start("benz"));

  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    introduce(): string {
      return `Helo, ${this.name}, ${this.age}`;
    }
  }
  const person = new Person("john", 20);
  console.log(person.introduce());
}

{
  // 접근 제어자
  // public : 기본값, 클래스 내/ 외부/ 상속에서 접근 가능(안 써도 기본으로 얘가 되있는 것)
  // private : 클래스 내부에서만 접근 가능
  // protected : 클래스 내부와 상속에서만 접근 가능
  // readonly : 클래스 내에서 선언된 변수에 붙이면, 외부에서 수정이 불가능한 것

  class Car {
    readonly speed: number;

    constructor(speed: number) {
      this.speed = speed;
    }
    private secret() {
      console.log("차 사고 크게 난 적 있음");
    }
  }
  const car = new Car(100);
  // Car.speed = 100; 이게 불가능함
  console.log(car.speed);
  // console.log(car.secret()); private이라서 접근 불가
}
{
  // private 다른 예시
  class Car {
    private engineOn: boolean = false;
    // 엔진 시작
    start() {
      if (this.engineOn) {
        console.log("Engine is already started");
        return;
      }
      this.engineOn = true;
      console.log("Engine started");
    }
    // 엔진 정지
    stop() {
      if (!this.engineOn) {
        console.log("Engine is alreadu stoped");
        return;
      }
      this.engineOn = false;
      console.log("Engine stopped");
    }
    //엔진 상태
    isEngineOn(): boolean {
      return this.engineOn;
    }
  }
  const benz = new Car();
  benz.start();
  console.log(benz.isEngineOn());
}
{
  class Car {
    protected speed: number; // private이라면 상속도 안되지만 protected라 가능
    constructor(speed: number) {
      this.speed = speed;
    }
  }
  class Benz extends Car {
    // constructor(speed:number){ 나만의 변수 만드는 거 아니라면 super 때문에 이거 이제는 쓸 필요가 없음
    //   super(speed);
    // }
    showSpeed() {
      console.log(this.speed);
    }
  }
  const benz = new Benz(100);
  benz.showSpeed();
}

{
  // 메소드 오버라이딩
  // JS와 비슷하게 메서드 똑같이 만들면 밑에 메서드가 실행되는 거지만, 대신에 반환 타입을 똑같이 맞추지 않으면 안됨(TS에서는)
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    getSpeed(): string {
      return `Car : ${this.speed}`;
    }
  }
  class Benz extends Car {
    name: string;
    constructor(speed: number, name: string) {
      super(speed);
      this.name = name;
    }
    getSpeed(): string {
      return `Benz : ${this.speed}`;
    }
  }
  const benz = new Benz(100, "S Class");
}

{
  // 추상클래스
  // 직접 인스턴스를 생성할 수 없는 클래스로
  // 주로 공통의 속성이나 메서드를 정의하기 위해서 사용 (직접 구현도 가능)
  // 추상클래스를 상속받는 클래스는 하나만 extends 할 수 있음
  abstract class Animal {
    abstract makeSound(): void; // 이렇게 메서드 옆에도 abstract를 써야 되는데, 상속받는 쪽에서 무조건 같은 메서드를 선언해야됨
    // 대신 상속하는 쪽에서는 이렇게 할당만 함
    abstract name: string;
    // 변수에도 abstract 가능
    go() {
      // 이렇게 추상클래스에서 직접 구현도 가능
      console.log("왈왈");
    }
    where: string = "서울"; // 변수도 가능
    // 이렇게 하면 자동으로 자식한테도 넘어감
  }
  class Dog extends Animal {
    name: string;
    constructor(name: string) {
      super();
      this.name = name;
    }
    makeSound(): void {
      console.log("멍멍");
    }
  }
  const dog = new Dog("wamma");
  dog.makeSound();
}

{
  // 추상클래스
  // 장점 : 연관된 클래스에 공통의 속성과 메서드를 구현하도록 강제할 수 있다
  // 단점 : 다른 클래스를 추가 상속하지 못하게 한다.

  // implements + interface(type)
  // 추상클래스와 차이점 : 추상 클래스는 직접 구현 가능, 이건 불가능, 여러개 implements 가능

  interface Runner {
    name: string;
    run(): void;
  }
  type Swimmer = {
    // type도 가능
    swim(): void;
  };
  abstract class PersonAbstract {
    abstract stop(): void;
  }
  class Person extends PersonAbstract implements Runner, Swimmer {
    // 이렇게 interface를 implements 받으면 내부에 있는 걸 구현해야할 의무가 생김, 추상클래스랑 비슷
    name: string;
    constructor(name: string) {
      super();
      this.name = name;
    }
    run() {
      console.log("Person is Run!");
    }
    swim(): void {
      console.log("Person is Swim!");
    }
    stop(): void {}
  }
}

{
  interface A {
    a(): void;
  }
  interface B extends A {
    // 이렇게 interface가 상속 받아서 class로 넘겨주면 2개 다 구현해야 할 의무가 생김
    b(): void;
  }
  class X implements B {
    a() {}
    b() {}
  }
}

{
  // abstract
  // 사용할 때 : 상속의 개념을 그대로 활용하면서 공통의 속성이나 메서드를 구현하고 싶을 때 (직접 구현 가능)
  // implements
  // 사용할 때 : 상속과 별개로 공통의 속성이나 메서드를 구현하고 싶을 때 (직접 구현 불가능)
}
