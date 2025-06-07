export class User {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly age: number,
  ) {}

  isAdult(): boolean {
    return this.age > 18;
  }
}
