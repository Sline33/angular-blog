import { Component, Input, OnInit } from '@angular/core';

import {PostService} from '../../services/post.service';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: Date;
  @Input() postLoveIts: number;
  @Input() index: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onGood() {
    this.postService.addLove(this.index);
  }


  onBad() {
    this.postService.removeLove(this.index);

  }

  onDeletePost(id: number){
    this.postService.removePost(this.index);
  }

}
