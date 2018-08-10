import { AuthActions } from "./store/auth.actions";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule, ActionReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SharedModule } from "./../shared/shared.module";

import { authReducer } from "./store/auth.reducer";
import { AuthEffects } from "./store/auth.effects";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature("auth", authReducer),
    EffectsModule.forFeature([AuthEffects]),
    AuthRoutingModule
  ],
  exports: [LoginComponent, RegisterComponent],
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthService, AuthGuard]
})
export class AuthModule {}
