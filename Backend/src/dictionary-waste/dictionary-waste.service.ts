import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DictionaryWaste } from './dictionary-waste-entity';
import { DictionaryWasteRepository } from './dictionary-waste-repository';
import { CreateDictionaryWasteDto } from './dto/create-dictionary-waste-dto';

@Injectable()
export class DictionaryWasteService {
  constructor(
    @InjectRepository(DictionaryWasteRepository)
    private dictionaryWasteRepository: DictionaryWasteRepository,
  ) {}
  // private listDictionaryWaste: DictionaryWaste[] = [];
  // getAllDictionaryWaste(): DictionaryWaste[] {
  //   return this.listDictionaryWaste;
  // }
  // getDictionaryWasteByFilter(
  //   filterDto: GetDictionaryFilterDto,
  // ): DictionaryWaste[] {
  //   const { search, status } = filterDto;
  //   let dictionaryWaste = this.getAllDictionaryWaste();
  //   if (status) {
  //     dictionaryWaste = dictionaryWaste.filter(
  //       (item) => item.status === status,
  //     );
  //   }
  //   if (search) {
  //     dictionaryWaste = dictionaryWaste.filter((item) => {
  //       if (item.title.includes(search) || item.description.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   // do something with status
  //   //do something with search
  //   return dictionaryWaste;
  // }
  createDictionaryWaste(
    createDictionaryWasteDto: CreateDictionaryWasteDto,
  ): Promise<DictionaryWaste> {
    return this.dictionaryWasteRepository.createDictionaryWaste(
      createDictionaryWasteDto,
    );
  }
  async getDictionaryWasteById(id: string): Promise<DictionaryWaste> {
    const found = await this.dictionaryWasteRepository.findOne({
      where: { id },
    });
    if (!found) {
      throw new NotFoundException(`Dictionary Waste with ID "${id}" not found`);
    }
    return found;
  }
  // deleteDictionaryWaste(id: string): void {
  //   const found = this.getDictionaryWasteById(id);
  //   this.listDictionaryWaste = this.listDictionaryWaste.filter(
  //     (item) => item.id !== found.id,
  //   );
  // }
  // updateDictionaryWasteStatus(
  //   id: string,
  //   isRecycled: StatusWaste,
  // ): DictionaryWaste {
  //   const dictionaryWaste = this.getDictionaryWasteById(id);
  //   dictionaryWaste.status = isRecycled;
  //   dictionaryWaste.updatedAt = new Date();
  //   return dictionaryWaste;
  // }
}
