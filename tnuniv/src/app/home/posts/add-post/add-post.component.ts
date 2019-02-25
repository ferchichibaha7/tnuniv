import { Component, OnInit } from '@angular/core';
import autosize from 'autosize';
import { NgForm } from '@angular/forms';
import {PostService } from '../post.service';
import { Post } from '../post.model';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/database';
declare var $: any;
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  url2 = [];
  url1 = [];
  pics = [];
  p: Post;
  t: any;

  constructor(private postserv: PostService,
              private firestore: AngularFirestore, ) {

  }

  ngOnInit() {

    // hide and show Post button
   $('.add-post-card__form__input').each(function() {
    autosize(this);

  });
   $('.buttom-menu').hide();
   $('.add-post-card__form__input').focus(() => {
    $('.buttom-menu').show();
  });
   $(document).mouseup((e) => {

    const container = $('.add-post-card');
    const target = $('.buttom-menu');

// tslint:disable-next-line: triple-equals
    if (!container.is(e.target) && container.has(e.target).length === 0 && this.url2.length == 0) {

      target.hide();
 }
  });
// hide and show Post button
   if (this.url2.length === 0 ) {
  $('#blah').hide(); }
}
onSelectFile(event: any) {
  if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < 5; i++) {
              const reader = new FileReader();



// tslint:disable-next-line: no-shadowed-variable
              reader.onload = (event) => {
                const fileUrl = (event.target as FileReader).result;
                this.url2.push(fileUrl);
              };

              reader.readAsDataURL(event.target.files[i]);
      }
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();


// tslint:disable-next-line: no-shadowed-variable
        reader.onload = (event) => {
          const fileUrl = (event.target as FileReader).result;
          this.url1.push(fileUrl);
        };

        reader.readAsDataURL(event.target.files[i]);
}
         }
}

onAddPost(form: NgForm) {

if (form.value.content !== '') {
  const p: Post = {
    post_id:this.firestore.createId(),
    creation_date: firebase.firestore.FieldValue.serverTimestamp(),
    content: form.value.content,

    };


  this.firestore.collection('posts').add(p);
  $('.add-post-card__form__input').val('');
  $('.add-post-card__form__input').height(23);
  form.value.content = '';

}








}




}
