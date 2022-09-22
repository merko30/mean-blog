import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [QuestionsComponent, QuestionComponent],
  imports: [CommonModule, QuestionsRoutingModule],
})
export class QuestionsModule {}
