import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { State } from "src/app/reducers";
import { addComment } from "../comments.actions";

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
  ) {
    this.createForm();
  }

  addCommentForm: FormGroup;

  ngOnInit() {}

  createForm() {
    this.addCommentForm = this.formBuilder.group({
      comment: ["", [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    return this.router.params.subscribe(params => {
      this.store.dispatch(
        addComment({ comment: this.addCommentForm.value, id: params.id })
      );
    });
  }
}
