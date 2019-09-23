import { User } from "src/app/auth/user";

export default interface Comment {
  author: User;
  comment: string;
  _id: string;
}
