export class Post {
  public title: string;
  public author: any;
  public body: string;
  public image: string;
  public likes: number;
  public _id: string;

  constructor(
    title: string,
    author: string,
    body: string,
    image: string,
    likes: number,
    _id: string
  ) {
    (this.title = title),
      (this.author = author),
      (this.body = body),
      (this.image = image),
      (this.likes = likes),
      (this._id = _id);
  }
}
