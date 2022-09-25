import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import { AuthInterceptor } from './auth/auth.interceptor';

import { authReducer } from './auth/auth.reducer';
import { questionReducer } from './questions/question.reducer';

import { AuthEffects } from './auth/auth.effects';
import { QuestionEffects } from './questions/question.effects';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forRoot({ auth: authReducer, questions: questionReducer }),
    EffectsModule.forRoot([]),
  ],
  bootstrap: [AppComponent],
  providers: [AuthInterceptor],
})
export class AppModule {}
