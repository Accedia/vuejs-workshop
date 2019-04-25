import { Service } from 'vue-typedi';
import { User } from '@/models/User';

// TODO - 1: Make the service class injectable
export class UserService {
  private url: string = 'https://jsonplaceholder.typicode.com/users';

  public getAll(): Promise<User[]> {
    // TODO - 2: Implement the method for retrieving all users
  }

  public getById(userId: number): Promise<User> {
    // TODO - 3: Implement the method for retrieving a user by id
    // example: https://jsonplaceholder.typicode.com/users/1
  }
}
