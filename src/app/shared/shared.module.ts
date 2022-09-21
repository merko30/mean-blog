import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextInputComponent } from "./text-input/text-input.component";
import { TextareaComponent } from "./textarea/textarea.component";
import { PaginationComponent } from "./pagination/pagination.component";

@NgModule({
  declarations: [TextInputComponent, TextareaComponent, PaginationComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TextInputComponent, TextareaComponent, PaginationComponent]
})
export class SharedModule {}

export { TextInputComponent } from "./text-input/text-input.component";
export { TextareaComponent } from "./textarea/textarea.component";
export { PaginationComponent } from "./pagination/pagination.component";
