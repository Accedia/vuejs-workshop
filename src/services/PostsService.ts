import { Post } from '../models/Post';
import { Service } from 'vue-typedi';
import { IPostsService, IPostsToken } from './IPostsService';

@Service(IPostsToken)
export class PostsService implements IPostsService {

  public getPosts(): Promise<Post[]> {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response: Response) => response.json());
  }

}
