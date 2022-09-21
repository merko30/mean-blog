import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { State } from "src/app/reducers";
import { addComment, editComment } from "../comments.actions";
import Comment from "../comment";

@Component({
  selector: "app-add-comment",
  templateUrl: "./add-comment.component.html",
  styleUrls: ["./add-comment.component.css"]
})
export class AddCommentComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private store: Store<State>
  ) {}

  addCommentForm: FormGroup;

  @Input() commentToEdit: Comment;
  @Input() editMode: boolean;
  @Input() toggleEditMode;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addCommentForm = this.formBuilder.group({
      comment: [
        this.commentToEdit ? this.commentToEdit.comment : "",
        [Validators.required, Validators.minLength(10)]
      ]
    });
  }

  onSubmit() {
    this.router.params.subscribe(params => {
      if (this.editMode) {
        this.store.dispatch(
          editComment({
            postID: params.id,
            commentID: this.commentToEdit._id,
            comment: this.addCommentForm.value
          })
        );
        this.toggleEditMode();
      } else {
        this.store.dispatch(
          addComment({ comment: this.addCommentForm.value, postID: params.id })
        );
      }
    });
  }
}
