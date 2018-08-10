
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostEditComponent } from './post-edit/post-edit.component';

import { AuthGuard } from './../auth/auth.guard';

const postRoutes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'new', component: PostAddComponent, canActivate: [AuthGuard] },
    { path: 'posts/:id', component: PostDetailComponent },
    { path: 'posts/:id/edit', component: PostEditComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(postRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class PostRoutingModule { }
