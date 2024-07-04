import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { DictionaryWaste } from './dictionary-waste-entity';
import { CreateDictionaryWasteDto } from './dto/create-dictionary-waste-dto';
import { StatusWaste } from './dictionary-waste.status-enum';
import { GetDictionaryFilterDto } from './dto/get-dictionary-filter-dto';

@Injectable()
export class DictionaryWasteRepository extends Repository<DictionaryWaste> {
  constructor(private dataSource: DataSource) {
    super(DictionaryWaste, dataSource.createEntityManager());
  }
  async getDictionaryWaste(filterDto: GetDictionaryFilterDto): Promise<DictionaryWaste[]> {

    const { search, status } = filterDto;

    const query = this.createQueryBuilder('dictionaryWaste');

    if (status) {
      query.andWhere('dictionaryWaste.status = :status', { status })
    }

    if (search) {
      query.andWhere('dictionaryWaste.name LIKE :search OR dictionaryWaste.description LIKE :search', { search: `%${search}%` })
    }
    const dictionaryWaste = await query.getMany();
    return dictionaryWaste;
  }

  async createDictionaryWaste(
    createDictionaryWasteDto: CreateDictionaryWasteDto,
  ): Promise<DictionaryWaste> {
    const { name, description, image, howToRecycle } = createDictionaryWasteDto;
    const newDictionaryWaste = this.create({
      name,
      description,
      image,
      howToRecycle,
      status: StatusWaste.RECYCLED,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await this.save(newDictionaryWaste);
    return newDictionaryWaste;
  }
}
