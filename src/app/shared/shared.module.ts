import { NgModule } from '@angular/core';

import { FieldComponent } from './field/field.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [
    FieldComponent,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    AlertComponent,
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
