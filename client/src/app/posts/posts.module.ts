import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostsRoutingModule } from "./posts-routing.module";
import { PostListComponent } from "./post-list/post-list.component";
import { EffectsModule } from "@ngrx/effects";
import { PostsEffects } from "./posts.effects";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostItemComponent } from "./post-item/post-item.component";
import { CommentListComponent } from "./comment-list/comment-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailComponent,
    PostItemComponent,
    CommentListComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([PostsEffects])
  ]
})
export class PostsModule {}
