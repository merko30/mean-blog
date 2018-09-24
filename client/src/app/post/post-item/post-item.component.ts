import { Component, Input } from "@angular/core";

import { Post } from "../../models/post.model";

import { FilterPipe } from "../../shared/filter/filter.pipe";

@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.html",
  styleUrls: ["./post-item.component.css"]
})
export class PostItemComponent {
  @Input()
  post: Post;
}
