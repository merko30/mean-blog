export interface User {
  id: number;
  username: string;
  firstName?: string;
  lastName?: string;
  email: string;
}

export interface Question {
  subject: string;
  content: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
}
