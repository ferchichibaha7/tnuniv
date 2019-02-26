import { DialogeComponent } from './dialoge/dialoge.component';
import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-news-elm',
  templateUrl: './news-elm.component.html',
  styleUrls: ['./news-elm.component.scss']
})
export class NewsElmComponent implements OnInit {
  @Input() new: string;
  s: string;
  s2: string;


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.s = this.new.substring(0, 70) + ' ...';
    this.s2 = this.new.substring(0, 50) + ' ...' ;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogeComponent, {
      width: '600px',
     data: {
       stri: this.new,
      title: this.s2}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');

    });
  }

}

