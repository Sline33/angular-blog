import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from '../models/post.model';

import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts :Post[] = [];
  postsSubject =new Subject<Post[]>();

  constructor() { 
    this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(id: number){
    this.posts.splice(id, 1);
    this.savePosts();
    this.emitPosts();
  }

  addLove(id: number) {
    this.posts[id].loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  removeLove(id: number) {
    this.posts[id].loveIts--;
    this.savePosts();
    this.emitPosts();
  }
}
