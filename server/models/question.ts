import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user';

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

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
