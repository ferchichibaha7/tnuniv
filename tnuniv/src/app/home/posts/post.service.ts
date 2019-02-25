import { Post } from './post.model';
import { AngularFirestore } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
@Injectable()
export class PostService {
  constructor(private afs: AngularFirestore) {

  }

 getPosts() {
  return this.afs.collection('posts', ref => ref .orderBy('creation_date', 'desc')).snapshotChanges(); }

}
