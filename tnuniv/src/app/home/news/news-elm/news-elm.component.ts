import { DialogeComponent } from './dialoge/dialoge.component';
import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Attribute } from '@angular/compiler';


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
    let s2: string ;
    let s: string;
    this.s = this.new.substring(0, 70) + ' ...';
    this.s2= this.new.substring(0, 50)+ ' ...' ;
  }
  openDialog(ne): void {
    const dialogRef = this.dialog.open(DialogeComponent, {
      width: '600px',
     data: {
       stri: this.new,
      title:this.s2}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}

