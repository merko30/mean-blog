import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostListComponent } from "./post-list/post-list.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { PostDetailResolverService } from "./post-detail-resolver.service";
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
  { path: "posts", component: PostListComponent },
  {
    path: "posts/add",
    component: AddPostComponent,
    data: { editMode: false },
    canActivate: [AuthGuard]
  },
  {
    path: "posts/:id",
    component: PostDetailComponent
  },
  {
    path: "posts/:id/edit",
    component: AddPostComponent,
    data: { editMode: true },
    canActivate: [AuthGuard],
    resolve: { post: PostDetailResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
