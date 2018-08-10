export class Comment {
  public comment: string;
  public author: string;
  public postID: string;
  public likes: number;

  constructor(comment: string, author: string, likes: number, postID: string) {
    (this.comment = comment),
      (this.author = author),
      (this.likes = likes),
      (this.postID = postID);
  }
}
