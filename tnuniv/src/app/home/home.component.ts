import { Component, OnInit , Input} from '@angular/core';
import {PostService } from './posts/post.service';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  postar: Post[] = [];
  p: Post;
  constructor(private postserv: PostService) { }

  ngOnInit() {
    this.postar = this.postserv.getPosts();
    console.log(this.postar);
  }

}
