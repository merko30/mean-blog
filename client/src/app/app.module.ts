import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostsModule } from "./posts/posts.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { StoreModule } from "@ngrx/store";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { reducers, metaReducers } from "./reducers";
import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from "./app.effects";
import { AuthModule } from "./auth/auth.module";
import { TextInputComponent } from "./shared/text-input/text-input.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PostsModule,
    AuthModule,
    SharedModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
