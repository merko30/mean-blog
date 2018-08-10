import { Observable } from "rxjs/Observable";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store/app.reducer";
import * as fromActions from "../store/post.actions";
import { Post } from "../../models/post.model";

@Component({
  selector: "app-post-edit",
  templateUrl: "./post-edit.component.html",
  styleUrls: ["./post-edit.component.css"]
})
export class PostEditComponent implements OnInit {
  EditPostForm: FormGroup;
  id: string;
  editingPost: Post;
  isLoading: Observable<Boolean>;
  message: Observable<String>;
  messageClass: Observable<String>;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromStore.AppState>
  ) {
    this.isLoading = this.store.select(fromStore.getPostLoading);
    this.message = this.store.select(fromStore.getMessage);
    this.messageClass = this.store.select(fromStore.getClass);
  }

  ngOnInit() {
    this.EditPostForm = this.fb.group({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(12)
      ]),
      body: new FormControl(null, [
        Validators.required,
        Validators.minLength(300)
      ]),
      image: new FormControl(null, Validators.required)
    });

    this.store.select(fromStore.getParams).subscribe(object => {
      this.id = object.id;
    });

    this.store.select(fromStore.getSelectedPost).subscribe(value => {
      this.editingPost = value;
    });

    this.EditPostForm.setValue({
      title: this.editingPost.title,
      body: this.editingPost.body,
      image: this.editingPost.image
    });
  }

  onEditPost() {
    this.store.dispatch(
      new fromActions.UpdatePost(this.id, this.EditPostForm.value)
    );
  }
}
