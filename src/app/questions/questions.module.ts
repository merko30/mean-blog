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
import { CreateQuestionComponent } from './create-question/create-question.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionService } from './question.service';
import { AnswerComponent } from './answer/answer.component';
import { CreateAnswerComponent } from './create-answer/create-answer.component';

@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionComponent,
    QuestionDetailsComponent,
    CreateQuestionComponent,
    AnswerComponent,
    CreateAnswerComponent,
  ],
  imports: [
    QuestionsRoutingModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature('questions', questionReducer),
    EffectsModule.forFeature([QuestionEffects]),
    ReactiveFormsModule,
    AngularEditorModule,
  ],
  providers: [QuestionService],
})
export class QuestionsModule {}
