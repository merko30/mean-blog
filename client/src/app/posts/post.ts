export interface Post {
  title: String;
  author: Object;
  body: String;
  image: String;
  comments: [];
  _id: String;
}

export interface PostInput {
  title: String;
  body: String;
  image: String;
}
