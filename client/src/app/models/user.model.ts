export class User {
  username: string;
  name: string;
  aPath: string;
  email: string;
  password: string;
  _id: string;
  constructor(
    username: string,
    name: string,
    aPath: string,
    email: string,
    password: string
  ) {
    this.username = username;
    this.name = name;
    this.aPath = aPath;
    this.email = email;
    this.password = password;
  }
}
