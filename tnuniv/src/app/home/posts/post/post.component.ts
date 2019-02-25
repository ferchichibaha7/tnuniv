import { Post } from './../post.model';
import { Component, OnInit, Input  } from '@angular/core';
import { $ } from 'protractor';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() p: Post;

  constructor() {


  }

  ngOnInit() {




  }

}
