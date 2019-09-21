import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TextInputComponent } from "./text-input/text-input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TextInputComponent]
})
export class SharedModule {}

export { TextInputComponent } from "./text-input/text-input.component";
