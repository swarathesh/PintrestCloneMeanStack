import {Component, OnDestroy, OnInit} from '@angular/core';

import { Subscription } from 'rxjs';

import { Post } from "../post.model";
import { PostsService } from "../posts.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-post-card-view',
  templateUrl: './post-card-view.component.html',
  styleUrls: ['./post-card-view.component.css']
})
export class PostCardViewComponent implements OnInit,OnDestroy {

  posts: Post[] = [];
  totalPosts = 10;
  postsPerPage = 2;
  pageSizeOption = [1,5,10];
  currentPage = 1;
  isloading = false;
  private postsub: Subscription;

  constructor(public postService: PostsService) { }

  ngOnInit() {
    this.isloading = true;
    this.postService.getPosts(this.postsPerPage,this.currentPage);
    this.postsub = this.postService.getPostUpdateListener()
      .subscribe((postData: {posts: Post[], postCount: number})=>{
        this.isloading = false;
        this.totalPosts = postData.postCount;
        this.posts = postData.posts;

      });

  }

  onChangePage(pagedata: PageEvent){
    this.currentPage = pagedata.pageIndex + 1;
    this.postsPerPage = pagedata.pageSize;
    this.postService.getPosts(this.postsPerPage,this.currentPage);

  }


  onDelete(postId : string ){
    this.postService.deletePost(postId).subscribe(()=>{
      this.postService.getPosts(this.postsPerPage,this.currentPage);
      });
  }

  ngOnDestroy() {
    this.postsub.unsubscribe();
  }


}
