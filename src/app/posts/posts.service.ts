import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PostInput, Post } from "./post";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(page?: number) {
    const URL = page ? `/api/posts?page=${page}` : "/api/posts";
    return this.http.get(URL);
  }

  getPost(id) {
    return this.http.get(`/api/posts/${id}`);
  }

  addPost(post: PostInput) {
    return this.http.post(`/api/posts`, post);
  }

  editPost(post: Post) {
    console.log(post);
    return this.http.put(`/api/posts/${post._id}`, post);
  }
}
