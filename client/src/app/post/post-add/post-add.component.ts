import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms/";

import { Observable } from "rxjs/Observable";

import { Store } from "@ngrx/store";

import * as fromStore from "../../store/app.reducer";
import * as fromActions from "../store/post.actions";

@Component({
  selector: "app-post-add",
  templateUrl: "./post-add.component.html",
  styleUrls: ["./post-add.component.css"]
})
export class PostAddComponent implements OnInit {
  isLoading: Observable<Boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromStore.AppState>
  ) {
    this.isLoading = this.store.select(fromStore.getPostLoading);
    this.message = this.store.select(fromStore.getMessage);
    this.messageClass = this.store.select(fromStore.getClass);
  }

  PostForm: FormGroup;
  newPost;
  message: Observable<String>;
  messageClass: Observable<String>;

  ngOnInit() {
    this.PostForm = this.fb.group(
      {
        title: new FormControl(null, [
          Validators.required,
          Validators.minLength(12)
        ]),
        body: new FormControl(null, [
          Validators.required,
          Validators.minLength(300)
        ]),
        image: new FormControl(null, Validators.required)
      },
      { updateOn: "blur" }
    );
  }

  onPost() {
    console.log(this.PostForm.value);
    this.store.dispatch(new fromActions.CreatePost(this.PostForm.value));
  }
}
