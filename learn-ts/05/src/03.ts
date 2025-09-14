{
  class Pair<T, U> {
    constructor(private first: T, private second: U) {}
    getFirst(): T {
      return this.first;
    }
    getSecond(): U {
      return this.second;
    }
  }
  const pairs = new Pair<number, string>(10, "A");
  console.log(pairs.getFirst());
  console.log(pairs.getSecond());
}

{
  interface Repository<T> {
    add(item: T): void;
    get(id: number): T | undefined;
  }
  class InMeomoryRepository<T> implements Repository<T> {
    private items: T[] = [];
    add(item: T): void {
      this.items.push(item);
    }
    get(id: number): T | undefined {
      return this.items[id];
    }
  }
  interface User {
    id: number;
    name: string;
  }
  const userRepository = new InMeomoryRepository<User>();
  userRepository.add({ id: 1, name: "kim" });
  console.log(userRepository.get(1));
}
