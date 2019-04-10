import { Post } from '@/models/Post';
import { Token } from 'typedi';

export interface IPostsService {
  getPosts(): Promise<Post[]>;
}

export const IPostsToken = new Token<IPostsService>();
