import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FieldComponent } from './field/field.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { AlertComponent } from './alert/alert.component';
import { ErrorPipe } from '../pipes/error.pipe';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule],
  declarations: [
    FieldComponent,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    AlertComponent,
    ErrorPipe,
  ],
  exports: [
    FieldComponent,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    AlertComponent,
  ],
})
export class SharedModule {}
