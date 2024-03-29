import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Answer } from './answer';
import { User } from './user';
import { Vote } from './vote';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  subject!: string;

  @Column()
  content!: string;

  @ManyToOne(() => User, (user) => user.questions)
  author!: User;

  @Column('int', { nullable: true })
  authorId?: number;

  @OneToMany(() => Vote, (vote) => vote.question)
  votes?: Vote[];

  @OneToMany(() => Answer, (answer) => answer.question)
  answers?: Answer[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
