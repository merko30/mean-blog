import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { State } from "src/app/reducers";
import { Store } from "@ngrx/store";
import { addPost } from "../posts.actions";

const imageURLRegex =
  "^https?://(?:[a-z-]+.)+[a-z]{2,6}(?:/[^/#?]+)+.(?:jpe?g|gif|png)$";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"]
})
export class AddPostComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private store: Store<State>) {
    this.createForm();
  }

  addPostForm: FormGroup;

  ngOnInit() {}

  createForm() {
    this.addPostForm = this.formBuilder.group({
      title: ["", [Validators.required, Validators.minLength(10)]],
      body: ["", [Validators.required, Validators.minLength(100)]],
      image: ["", [Validators.required, Validators.pattern(imageURLRegex)]]
    });
  }

  onSubmit() {
    this.store.dispatch(addPost({ post: this.addPostForm.value }));
  }
}
