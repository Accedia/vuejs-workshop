export class User {
  constructor(public id: number,
              public name: string,
              public age: number) {}
}

export default [
  new User(1, 'Peter', 20),
  new User(2, 'John', 35),
];
