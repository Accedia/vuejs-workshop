import { Service } from 'vue-typedi';
import { User } from '@/models/User';

@Service()
export class UserService {
  private url: string = 'https://jsonplaceholder.typicode.com/users';

  public getAll(): Promise<User[]> {
    return fetch(this.url)
      .then((response) => response.json() as Promise<User[]>);
  }

  public getById(userId: number): Promise<User> {
    return fetch(`${this.url}/${userId}`)
      .then((response) => response.json() as Promise<User>);
  }
}
