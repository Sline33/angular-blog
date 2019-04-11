import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PostService } from '../../../services/post.service';
import { DialogData } from '../post-list-item.component';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.css']
})
export class ModalViewComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ModalViewComponent>, private postService: PostService, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {

  }

  onNoClick() {
    this.dialogRef.close();
  }

  onDeletePost(){
    console.log('vous venez de supprimer le post : ' + this.data.postTitle);
    this.postService.removePost(this.data.index);
    this.dialogRef.close();
  }
}
