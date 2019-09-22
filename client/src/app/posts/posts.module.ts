import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostsRoutingModule } from "./posts-routing.module";
import { PostListComponent } from "./post-list/post-list.component";
import { EffectsModule } from "@ngrx/effects";
import { PostsEffects } from "./posts.effects";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostItemComponent } from "./post-item/post-item.component";
import { CommentListComponent } from "./comments/comment-list/comment-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommentItemComponent } from "./comments/comment-item/comment-item.component";
import { AddCommentComponent } from "./comments/add-comment/add-comment.component";
import { CommentsService } from "./comments/comments.service";
import { CommentsEffects } from "./comments/comments.effects";

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailComponent,
    PostItemComponent,
    CommentListComponent,
    AddPostComponent,
    CommentItemComponent,
    AddCommentComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([PostsEffects, CommentsEffects])
  ]
})
export class PostsModule {}
