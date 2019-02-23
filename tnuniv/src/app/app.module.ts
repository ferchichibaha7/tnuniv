import { MaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import * as $ from 'jquery';
import { FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { SubjComponent } from './home/subj/subj.component';
import { ElementComponent } from './home/subj/element/element.component';
import { NewsComponent } from './home/news/news.component';
import { NewsElmComponent } from './home/news/news-elm/news-elm.component';
import { DialogeComponent } from './home/news/news-elm/dialoge/dialoge.component';
import { AddPostComponent } from './home/posts/add-post/add-post.component';
import { PostComponent } from './home/posts/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
     SubjComponent,
    ElementComponent,
    NewsComponent,
    NewsElmComponent,
    RoutingComponent,
    DialogeComponent,
    AddPostComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule

  ],
  entryComponents: [DialogeComponent],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
