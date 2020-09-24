import {Component, OnDestroy, OnInit} from '@angular/core';

import { Subscription } from 'rxjs';

import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-post-card-view',
  templateUrl: './post-card-view.component.html',
  styleUrls: ['./post-card-view.component.css']
})
export class PostCardViewComponent implements OnInit,OnDestroy {

  posts: Post[] = [];
  isloading = false;
  private postsub: Subscription;

  constructor(public postService: PostsService) { }

  ngOnInit() {
    this.isloading = true;
    this.postService.getPosts();
    this.postsub = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[])=>{
        this.isloading = false;
        this.posts = posts;

      });

  }
  onDelete(postId : string ){
    this.postService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsub.unsubscribe();
  }


}
