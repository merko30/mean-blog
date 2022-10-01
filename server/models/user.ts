import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Answer } from './answer';
import { Question } from './question';
import { Vote } from './vote';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Question, (question) => question.author)
  @JoinColumn({ name: 'authorId' })
  questions?: Question[];

  @OneToMany(() => Answer, (answer) => answer.author)
  @JoinColumn({ name: 'authorId' })
  answers?: Answer[];

  @OneToMany(() => Vote, (vote) => vote.user)
  @JoinColumn({ name: 'userId' })
  votes?: Question[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
