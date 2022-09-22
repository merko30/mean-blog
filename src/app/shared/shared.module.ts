import { NgModule } from '@angular/core';

import { FieldComponent } from './field/field.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    FieldComponent,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
  ],
  exports: [FieldComponent, NavbarComponent, FooterComponent, ButtonComponent],
})
export class SharedModule {}
