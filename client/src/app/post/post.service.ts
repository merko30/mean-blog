import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "./../../environments/environment";

import { Post } from "../models/post.model";
import { Comment } from "../models/comment.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.apiUrl + "/posts");
  }

  addPost(Post) {
    return this.http.post(environment.apiUrl + "/posts", Post);
  }

  getPost(id) {
    return this.http.get<Post>(environment.apiUrl + "/posts/" + id);
  }

  editPost(id: string, Post: Post) {
    return this.http.put(environment.apiUrl + "/posts/" + id, Post);
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(environment.apiUrl + "/comments");
  }

  addComment(id, comment: Comment) {
    return this.http.post(
      environment.apiUrl + "/posts/" + id + "/comments",
      comment
    );
  }

  deleteComment(postId, commentId): any {
    return this.http.delete(
      environment.apiUrl + "/posts/" + postId + "/comments/" + commentId
    );
  }

  editComment(postId, commentId, Comment: Comment) {
    return this.http.put(
      environment.apiUrl + "/posts/" + postId + "/comments/" + commentId,
      Comment
    );
  }
}
