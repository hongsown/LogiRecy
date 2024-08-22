import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserApiLimit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  count: number;
}