import { Component, OnInit, Input } from "@angular/core";

import Comment from "../comment";

@Component({
  selector: "app-comment-list",
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.css"]
})
export class CommentListComponent implements OnInit {
  constructor() {}

  @Input()
  comments: Comment[];

  @Input()
  loggedIn: boolean;

  ngOnInit() {}
}
