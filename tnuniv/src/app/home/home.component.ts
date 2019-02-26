import { Component, OnInit , Input} from '@angular/core';
import {PostService } from './posts/post.service';
import { Post } from './posts/post.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  postar: Post[] = [];



  constructor(private postserv: PostService) { }

  ngOnInit() {
    this.postserv.getPosts().subscribe(data => {
      this.postar = data.map(e => {

        return {
          post_id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Post;
      });
    });


  }






}
