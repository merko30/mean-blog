import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor/lib/config';

import { Store } from '@ngrx/store';

import { createAnswer } from '../question.actions';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css'],
})
export class CreateAnswerComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.form = this.formBuilder.group({
      content: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  @Input() questionId!: number;

  form: FormGroup;

  editorConfig: AngularEditorConfig = { editable: true, height: '200px' };

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.form.valid) {
      this.store.dispatch(
        createAnswer({
          answer: { ...this.form.value, questionId: this.questionId },
        })
      );
    }
  }
}
