import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { DictionaryWaste } from './dictionary-waste-entity';
import { CreateDictionaryWasteDto } from './dto/create-dictionary-waste-dto';
import { StatusWaste } from './dictionary-waste.status-enum';

@Injectable()
export class DictionaryWasteRepository extends Repository<DictionaryWaste> {
  constructor(private dataSource: DataSource) {
    super(DictionaryWaste, dataSource.createEntityManager());
  }
  async createDictionaryWaste(
    createDictionaryWasteDto: CreateDictionaryWasteDto,
  ): Promise<DictionaryWaste> {
    const { title, description } = createDictionaryWasteDto;
    const newDictionaryWaste = this.create({
      title,
      description,
      status: StatusWaste.RECYCLED,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await this.save(newDictionaryWaste);
    return newDictionaryWaste;
  }
}
