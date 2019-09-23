import Comment from "./comments/comment";
import { User } from "../auth/user";

export interface Post {
  title: String;
  author: User;
  body: String;
  image: String;
  comments?: Comment[];
  _id: String;
}

export interface PostInput {
  title: String;
  body: String;
  image: String;
}
