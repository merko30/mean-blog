import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NotAuthGuard } from "./not-auth.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [NotAuthGuard] },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [NotAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
