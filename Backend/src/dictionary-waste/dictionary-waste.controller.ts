import { Controller, Get } from '@nestjs/common';
import { DictionaryWasteService } from './dictionary-waste.service';
import { DictionaryWaste } from './dictionary-waste.model';

@Controller('dictionary-waste')
export class DictionaryWasteController {
  constructor(private dictionaryWasteService: DictionaryWasteService) {}

  @Get()
  getAllDictionaryWaste(): DictionaryWaste[] {
    return this.dictionaryWasteService.getAllDictionaryWaste();
  }
}
