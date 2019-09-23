import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { State } from "src/app/reducers";
import { Store } from "@ngrx/store";
import { addPost, editPost } from "../posts.actions";
import { Post } from "../post";
import { ActivatedRoute } from "@angular/router";

const imageURLRegex =
  "^https?://(?:[a-z-]+.)+[a-z]{2,6}(?:/[^/#?]+)+.(?:jpe?g|gif|png)$";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"]
})
export class AddPostComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<State>,
    private router: ActivatedRoute
  ) {
    this.router.data.subscribe(data => {
      this.editMode = data.editMode;
      if (data.editMode) {
        this.createForm(data.post);
      } else {
        this.createForm();
      }
    });
  }

  editMode: boolean;
  addPostForm: FormGroup;

  ngOnInit() {}

  createForm(data?: Post) {
    this.addPostForm = this.formBuilder.group({
      title: [
        data.title ? data.title : "",
        [Validators.required, Validators.minLength(10)]
      ],
      body: [
        data.body ? data.body : "",
        [Validators.required, Validators.minLength(100)]
      ],
      image: [
        data.image ? data.image : "",
        [Validators.required, Validators.pattern(imageURLRegex)]
      ]
    });
  }

  onSubmit() {
    this.router.data.subscribe(data => {
      if (data.editMode) {
        return this.store.dispatch(
          editPost({
            post: {
              _id: data.post._id,
              ...this.addPostForm.value
            }
          })
        );
      } else {
        return this.store.dispatch(addPost({ post: this.addPostForm.value }));
      }
    });
  }
}
