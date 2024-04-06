import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { DictionaryWasteService } from './dictionary-waste.service';

import { CreateDictionaryWasteDto } from './dto/create-dictionary-waste-dto';
import { GetDictionaryFilterDto } from './dto/get-dictionary-filter-dto';
import { UpdateDictionaryWasteDto } from './dto/update-dictionary-waste-dto';
import { DictionaryWasteEntity } from './dictionary-waste-entity';

@Controller('dictionary-waste')
export class DictionaryWasteController {
  constructor(private dictionaryWasteService: DictionaryWasteService) {}

  // @Get()
  // getDictionaryWaste(
  //   @Query() filterDto: GetDictionaryFilterDto,
  // ): DictionaryWaste[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.dictionaryWasteService.getDictionaryWasteByFilter(filterDto);
  //   } else {
  //     return this.dictionaryWasteService.getAllDictionaryWaste();
  //   }
  // }
  @Get('/:id')
  getDictionaryWasteById(
    @Param('id') id: string,
  ): Promise<DictionaryWasteEntity> {
    return this.dictionaryWasteService.getDictionaryWasteById(id);
  }
  // @Post()
  // createDictionaryWaste(
  //   @Body()
  //   createDictionaryWasteDto: CreateDictionaryWasteDto,
  // ): DictionaryWaste {
  //   return this.dictionaryWasteService.createDictionaryWaste(
  //     createDictionaryWasteDto,
  //   );
  // }
  // @Delete('/:id')
  // deleteDictionaryWaste(@Param('id') id: string): void {
  //   return this.dictionaryWasteService.deleteDictionaryWaste(id);
  // }
  // @Patch('/:id/status')
  // updateDictionaryWasteStatus(
  //   @Param('id') id: string,
  //   @Body() updateDictionaryStatusDto: UpdateDictionaryWasteDto,
  // ): DictionaryWaste {
  //   const { status } = updateDictionaryStatusDto;
  //   return this.dictionaryWasteService.updateDictionaryWasteStatus(id, status);
  // }
}
