import { Component, OnInit } from '@angular/core';
import autosize from 'autosize';
declare var $: any;
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
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

    if (!container.is(e.target) && container.has(e.target).length === 0) {

      target.hide();
 }
  });
// hide and show Post button





}}


