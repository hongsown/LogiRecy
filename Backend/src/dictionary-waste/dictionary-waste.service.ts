import { Injectable, NotFoundException } from '@nestjs/common';
import { DictionaryWaste, StatusWaste } from './dictionary-waste.model';
import { v4 as uuid } from 'uuid';
import { CreateDictionaryWasteDto } from './dto/create-dictionary-waste-dto';
import { GetDictionaryFilterDto } from './dto/get-dictionary-filter-dto';
@Injectable()
export class DictionaryWasteService {
  private listDictionaryWaste: DictionaryWaste[] = [];

  getAllDictionaryWaste(): DictionaryWaste[] {
    return this.listDictionaryWaste;
  }

  getDictionaryWasteByFilter(
    filterDto: GetDictionaryFilterDto,
  ): DictionaryWaste[] {
    const { search, status } = filterDto;
    let dictionaryWaste = this.getAllDictionaryWaste();
    if (status) {
      dictionaryWaste = dictionaryWaste.filter(
        (item) => item.status === status,
      );
    }
    if (search) {
      dictionaryWaste = dictionaryWaste.filter((item) => {
        if (item.title.includes(search) || item.description.includes(search)) {
          return true;
        }
        return false;
      });
    }
    // do something with status

    //do something with search
    return dictionaryWaste;
  }

  createDictionaryWaste(
    createDictionaryWasteDto: CreateDictionaryWasteDto,
  ): DictionaryWaste {
    const { title, description } = createDictionaryWasteDto;
    const newDictionaryWaste: DictionaryWaste = {
      id: uuid(),
      title: title,
      description: description,
      status: StatusWaste.NOT_RECYCLED,
      image: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.listDictionaryWaste.push(newDictionaryWaste);
    return newDictionaryWaste;
  }

  getDictionaryWasteById(id: string): DictionaryWaste {
    const found = this.listDictionaryWaste.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException(`Dictionary Waste with ID "${id}" not found`);
    }
    return found;
  }

  deleteDictionaryWaste(id: string): void {
    const found = this.getDictionaryWasteById(id);

    this.listDictionaryWaste = this.listDictionaryWaste.filter(
      (item) => item.id !== found.id,
    );
  }

  updateDictionaryWasteStatus(
    id: string,
    isRecycled: StatusWaste,
  ): DictionaryWaste {
    const dictionaryWaste = this.getDictionaryWasteById(id);

    dictionaryWaste.status = isRecycled;
    dictionaryWaste.updatedAt = new Date();
    return dictionaryWaste;
  }
}
