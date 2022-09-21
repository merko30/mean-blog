import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  addComment(postID, comment) {
    return this.http.post(`/api/comments/${postID}`, comment);
  }

  editComment(postID, commentID, comment) {
    return this.http.put(`/api/comments/${postID}/${commentID}`, comment);
  }
}
