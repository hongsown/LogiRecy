import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StatusWaste } from './dictionary-waste.status-enum';

@Entity()
export class DictionaryWaste {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  howToRecycle: string;

  @Column()
  status: StatusWaste;

  @Column({ type: 'timestamp', nullable: true })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
