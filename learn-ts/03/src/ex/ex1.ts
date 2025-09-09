// 타입별칭 연습문제

{
  // 1
  type Person = {
    name: string;
    age: number;
  };

  function getPersonInfo(person: Person): void {
    console.log(`이름: ${person.name}, 나이 : ${person.age}`);
  }
}

{
  // 2
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };

  function createConfig(host: string, port: number, ssl: boolean): Config {
    return { host, port, ssl };
  }

  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

{
  // 3
  type Reactangle = {
    width: number;
    height: number;
  };
  function calculateArea(rectangle: Reactangle): number {
    return rectangle.width * rectangle.height;
  }
}

{
  // 4
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };
  function calculateAverageGrade(student: Student): number {
    const total = student.grades.reduce((acc, cur) => acc + cur, 0);
    return total / student.grades.length;
  }
}

{
  // 5
  type Response = {
    status: string;
    data: string;
    message: string;
  };
  function createResponse(
    status: string,
    data: string,
    message: string
  ): Response {
    return { status, data, message };
  }
  // code

  console.log(createResponse("success", "John", "fetch success")); // { status: 'success', data: 'John', message: 'fetch success'
}

{
  // 6
  type Employee = {
    id: string;
    name: string;
    position: string;
  };

  function getEmployeeInfo(employee: Employee): string {
    return `${employee.id} works as a ${employee.position} with ID: ${employee.id}.`;
  }

  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  ); // "james works as a developer with ID: 1."
}

{
  // 7
  type Circle = {
    radius: number;
  };

  function calculateCircumference(circle: Circle): number {
    return 2 * Math.PI * circle.radius;
  }
  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

{
  // 8
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  function getDiscountedPrice(product: Product, discount: number): number {
    return (product.price = product.price * (discount / 100));
  }

  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  ); // 900
}

{
  // 9
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  function getBookSummary(book: Book): string {
    return `${book.title} by ${book.author}, published in ${book.publishedYear}.`;
  }

  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  ); // "river by james, published in 2020."
}

{
  // 10
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };

  function isValidTransaction(transaction: Transaction): boolean {
    return transaction.amount > 0;
  }
}
