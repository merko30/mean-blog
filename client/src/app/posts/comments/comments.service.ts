import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  addComment(postID, comment) {
    return this.http.post(
      `http://localhost:3000/api/comments/${postID}`,
      comment
    );
  }
}
