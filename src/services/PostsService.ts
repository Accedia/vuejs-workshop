import { Post } from '../models/Post';

export class PostsService {

  public getPosts(): Promise<Post[]> {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response: Response) => response.json());
  }

}
