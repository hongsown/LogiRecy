import { Injectable } from '@nestjs/common';
import { DictionaryWaste } from './dictionary-waste.model';
import { v4 as uuid } from 'uuid';
@Injectable()
export class DictionaryWasteService {
  private listDictionaryWaste: DictionaryWaste[] = [];

  getAllDictionaryWaste(): DictionaryWaste[] {
    return this.listDictionaryWaste;
  }
  createDictionaryWaste(title: string, description: string): DictionaryWaste {
    const newDictionaryWaste: DictionaryWaste = {
      id: uuid(),
      title: title,
      description: description,
      status: true,
      image: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      isRecycled: false,
    };
    this.listDictionaryWaste.push(newDictionaryWaste);
    return newDictionaryWaste;
  }
}
