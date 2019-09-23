export interface RegisterInput {
  username: String;
  name: String;
  email: String;
  password: String;
  avatar: String;
}

export interface LoginInput {
  usernameOrEmail: String;
  password: String;
}

export interface TokenResponse {
  token: String;
}

export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
}
