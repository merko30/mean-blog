import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Question } from './question';
import { User } from './user';
import { Vote } from './vote';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  content!: string;

  @ManyToOne(() => User, (user) => user.answers)
  author!: User;

  @Column({ nullable: true })
  authorId?: number;

  @OneToMany(() => Vote, (vote) => vote.question)
  votes?: Vote[];

  @ManyToOne(() => Question, (question) => question.answers)
  question!: Question;

  @Column({ nullable: true })
  questionId?: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
