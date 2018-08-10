import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { PostAddComponent } from "./post-add/post-add.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostEditComponent } from "./post-edit/post-edit.component";

import { PostService } from "./post.service";
import { PostReducer } from "./store/post.reducer";
import { PostEffects } from "./store/post.effects";

import { PostRoutingModule } from "./post-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature("posts", PostReducer),
    EffectsModule.forFeature([PostEffects]),
    PostRoutingModule
  ],
  exports: [
    PostAddComponent,
    PostEditComponent,
    PostDetailComponent,
    PostListComponent
  ],
  declarations: [
    PostAddComponent,
    PostEditComponent,
    PostDetailComponent,
    PostListComponent
  ],
  providers: [PostService]
})
export class PostModule {}
