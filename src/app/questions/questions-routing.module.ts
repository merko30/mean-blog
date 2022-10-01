import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { CreateQuestionComponent } from './create-question/create-question.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path: '', component: QuestionsComponent },
  {
    path: 'create',
    component: CreateQuestionComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class QuestionsRoutingModule {}
