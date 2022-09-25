import { hashSync } from 'bcryptjs';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
} from 'typeorm';

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

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
