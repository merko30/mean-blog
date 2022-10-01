export interface User {
  id: number;
  username: string;
  firstName?: string;
  lastName?: string;
  email: string;
}

enum VoteType {
  positive = 'positive',
  negative = 'negative',
}

export interface Vote {
  type: VoteType;
}

export interface Question {
  subject: string;
  content: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
  votes: Vote[];
  voteCount: number;
  answerCount: number;
}
