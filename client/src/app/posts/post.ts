import Comment from "./comments/comment";

export interface Post {
  title: String;
  author: Object;
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
