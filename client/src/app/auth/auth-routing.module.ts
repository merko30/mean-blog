import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { GuestGuard } from "./guest.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [GuestGuard] },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [GuestGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
