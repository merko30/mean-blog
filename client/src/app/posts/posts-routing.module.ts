import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostListComponent } from "./post-list/post-list.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { AddPostComponent } from "./add-post/add-post.component";

const routes: Routes = [
  { path: "posts", component: PostListComponent },
  { path: "posts/add", component: AddPostComponent },
  {
    path: "posts/:id",
    component: PostDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
