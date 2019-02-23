import { Post } from './post.model';

export class PostService {


 private posts: Post[] = [];



 getPosts() {

  return this.posts;
 }
}
