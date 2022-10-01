import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Question } from './question';
import { User } from './user';

enum VoteType {
  positive = 'positive',
  negative = 'negative',
}

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.votes)
  user!: User;

  @Column()
  userId!: number;

  @ManyToOne(() => Question, (question) => question.votes)
  question!: Question;

  @Column()
  questionId!: number;

  @Column({ default: VoteType.positive })
  type!: VoteType;
}
