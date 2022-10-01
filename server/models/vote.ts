import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Answer } from './answer';
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

  @ManyToOne(() => Question, (question) => question.votes, { nullable: true })
  question!: Question;

  @Column({ nullable: true })
  questionId!: number;

  @ManyToOne(() => Answer, (answer) => answer.votes, { nullable: true })
  answer?: Answer;

  @Column({ nullable: true })
  answerId?: number;

  @Column({ default: VoteType.positive })
  type!: VoteType;
}
