import { DataSource, EntityRepository, Repository } from 'typeorm';
import { DictionaryWasteEntity } from './dictionary-waste-entity';
import { Injectable } from '@nestjs/common';
// @EntityRepository(DictionaryWasteEntity)
// export class DictionaryWasteRepository extends Repository<DictionaryWasteEntity> {}
@Injectable()
export class DictionaryWasteRepository extends Repository<DictionaryWasteEntity> {
  constructor(private dataSource: DataSource) {
    super(DictionaryWasteEntity, dataSource.createEntityManager());
  }
}
