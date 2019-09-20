import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Post from "./post";
import { Observable } from "rxjs";

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
}
