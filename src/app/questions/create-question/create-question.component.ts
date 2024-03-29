import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AngularEditorConfig } from '@kolkov/angular-editor/public-api';
import { Store } from '@ngrx/store';
import { createQuestion } from '../question.actions';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
})
export class CreateQuestionComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.form = this.formBuilder.group({
      subject: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      content: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  editorConfig: AngularEditorConfig = { editable: true, height: '300px' };

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.form.valid) {
      this.store.dispatch(createQuestion({ question: this.form.value }));
    } else {
      Object.keys(this.form.controls).forEach((field) => {
        const control = this.form.get(field);
        if (control) {
          control.updateValueAndValidity();
        }
      });
    }
  }
}
