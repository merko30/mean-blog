import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { LoadingComponent } from "./loading/loading.component";
import { FilterPipe } from "./filter/filter.pipe";

@NgModule({
  imports: [CommonModule],
  exports: [LoadingComponent, FilterPipe],
  declarations: [LoadingComponent, FilterPipe],
  providers: []
})
export class SharedModule {}
