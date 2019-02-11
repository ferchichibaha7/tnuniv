import { MaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { SubjComponent } from './home/subj/subj.component';
import { ElementComponent } from './home/subj/element/element.component';
import { NewsComponent } from './home/news/news.component';
import { NewsElmComponent } from './home/news/news-elm/news-elm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    SubjComponent,
    ElementComponent,
    NewsComponent,
    NewsElmComponent,
    RoutingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
