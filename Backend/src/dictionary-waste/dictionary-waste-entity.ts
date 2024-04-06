import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StatusWaste } from './dictionary-waste.status-enum';

@Entity()
export class DictionaryWasteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: StatusWaste;
}
