export class User {
  name: string;
  readonly id: string;

  constructor(name: string) {
    this.name = name,
    this.id = crypto.randomUUID()
  }
}