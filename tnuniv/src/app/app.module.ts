import { PostService } from './home/posts/post.service';
import { MaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SubjComponent } from './home/subj/subj.component';
import { ElementComponent } from './home/subj/element/element.component';
import { NewsComponent } from './home/news/news.component';
import { NewsElmComponent } from './home/news/news-elm/news-elm.component';
import { DialogeComponent } from './home/news/news-elm/dialoge/dialoge.component';
import { AddPostComponent } from './home/posts/add-post/add-post.component';
import { PostComponent } from './home/posts/post/post.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';





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
    FormsModule,

    AngularFireModule.initializeApp(environment.FirebaseConfig),
    AngularFireDatabaseModule

  ],
  entryComponents: [DialogeComponent],
  providers: [PostService,AngularFirestore, { provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
