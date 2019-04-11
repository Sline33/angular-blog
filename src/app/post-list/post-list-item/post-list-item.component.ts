import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ModalViewComponent } from './modal-view/modal-view.component';

import {PostService} from '../../services/post.service';

export interface DialogData {
  postTitle: string;
  index: number;
}

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

  constructor(private postService: PostService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onGood() {
    this.postService.addLove(this.index);
  }

  onBad() {
    this.postService.removeLove(this.index);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalViewComponent, {
      width: '450px', data: {postTitle: this.postTitle, index: this.index}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Fermeture du modal !');
    });
  }

}
