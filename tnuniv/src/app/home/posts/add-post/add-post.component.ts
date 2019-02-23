import { Post } from './../post.model';
import { Component, OnInit } from '@angular/core';
import autosize from 'autosize';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { log } from 'util';

declare var $: any;
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  url2 = [];
  url1 = [];
  p: Post;

  constructor() {

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
const p: Post = {
content: form.value.content,
};
console.log(p);


}




}


