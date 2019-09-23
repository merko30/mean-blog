import { Component, OnInit, Input } from "@angular/core";
import Comment from "../comment";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-comment-item",
  templateUrl: "./comment-item.component.html",
  styleUrls: ["./comment-item.component.css"]
})
export class CommentItemComponent implements OnInit {
  constructor(private authService: AuthService) {
    this.currentUserID = this.authService.getCurrentUserID();
  }

  ngOnInit() {}

  currentUserID: string;

  @Input()
  comment: Comment;

  @Input()
  loggedIn: boolean;

  editMode: boolean;

  toggleEditMode = () => {
    this.editMode = !this.editMode;
  };
}
