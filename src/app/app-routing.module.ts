import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPostComponent } from './new-post/new-post.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: 'post-list', component: PostListComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: '', redirectTo: 'post-list', pathMatch: 'full' },
  { path: '**', redirectTo: 'post-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
