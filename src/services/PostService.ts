import { Service } from 'vue-typedi';
import { Post } from '@/models/Post';

// TODO - 4: Make the service class injectable
export class PostService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  public getByUser(userId: number): Promise<Post[]> {
    // TODO - 5: Implement the method for retrieving all posts by user
    // example: https://jsonplaceholder.typicode.com/posts?userId=1
  }
}
