import { Service } from 'vue-typedi';
import { Post } from '@/models/Post';

@Service()
export class PostService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  public getByUser(userId: number): Promise<Post[]> {
    return fetch(`${this.url}?userId=${userId}`)
      .then((response) => response.json() as Promise<Post[]>);
  }
}
