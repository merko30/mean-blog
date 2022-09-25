import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './question/question.component';
import { questionReducer } from './question.reducer';
import { QuestionEffects } from './question.effects';

@NgModule({
  declarations: [QuestionsComponent, QuestionComponent],
  imports: [
    QuestionsRoutingModule,
    CommonModule,
    StoreModule.forFeature('questions', questionReducer),
    EffectsModule.forFeature([QuestionEffects]),
  ],
})
export class QuestionsModule {}
