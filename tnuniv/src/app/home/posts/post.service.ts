import { Post } from './post.model';

export class PostService {


public posts: Post[] = [
   ];



 getPosts() {
return this.posts;
 }



 pushPost(p: Post) {
   this.posts.unshift(p);
 }
}
