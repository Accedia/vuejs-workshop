import { User } from '../data/data';
import data from '../data/data';

export default class UsersService {
  private users!: User[];

  constructor() {
    this.users = data;
  }

  public getAll(): User[] {
    return this.users;
  }

  public get(id: number): User {
    return this.users.find((u) => u.id === id) as User;
  }
}
