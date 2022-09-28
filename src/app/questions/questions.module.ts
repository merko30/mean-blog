import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './question/question.component';
import { questionReducer } from './question.reducer';
import { QuestionEffects } from './question.effects';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionComponent,
    QuestionDetailsComponent,
  ],
  imports: [
    QuestionsRoutingModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature('questions', questionReducer),
    EffectsModule.forFeature([QuestionEffects]),
  ],
})
export class QuestionsModule {}
