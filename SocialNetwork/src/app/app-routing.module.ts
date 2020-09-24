import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PostCardViewComponent} from "./Post/post-card-view/post-card-view.component";
import {PostInputViewComponent} from "./Post/post-input-view/post-input-view.component";

const routes: Routes = [
  {path:'',component: PostCardViewComponent},
  {path:'create',component: PostInputViewComponent},
  {path: 'edit/:postId',component: PostInputViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
