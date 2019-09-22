import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PostInput, Post } from "./post";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get("http://localhost:3000/api/posts");
  }

  getPost(id) {
    return this.http.get(`http://localhost:3000/api/posts/${id}`);
  }

  addPost(post: PostInput) {
    return this.http.post(`http://localhost:3000/api/posts`, post);
  }
}
