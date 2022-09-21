import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./auth.effects";
import { NotAuthGuard } from "./not-auth.guard";

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [NotAuthGuard]
})
export class AuthModule {}
