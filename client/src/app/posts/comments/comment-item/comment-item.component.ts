import { Component, OnInit, Input } from "@angular/core";
import Comment from "../comment";

@Component({
  selector: "app-comment-item",
  templateUrl: "./comment-item.component.html",
  styleUrls: ["./comment-item.component.css"]
})
export class CommentItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input()
  comment: Comment;

  editMode: boolean;

  toggleEditMode = () => {
    this.editMode = !this.editMode;
  };
}
