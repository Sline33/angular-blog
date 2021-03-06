import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubscrition: Subscription;

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.postSubscrition = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  onNewPost() {
    this.router.navigate(['/new-post']);
  }

  ngOnDestroy() {
    this.postSubscrition.unsubscribe();
  }

}
