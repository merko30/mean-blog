import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { ProfileComponent } from "./shared/profile/profile.component";

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "profile", component: ProfileComponent },
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule" },
  { path: "posts", loadChildren: "./post/post.module#PostModule" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
