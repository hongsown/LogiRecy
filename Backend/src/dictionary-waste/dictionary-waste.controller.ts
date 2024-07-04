import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { DictionaryWasteService } from './dictionary-waste.service';

import { DictionaryWaste } from './dictionary-waste-entity';
import { CreateDictionaryWasteDto } from './dto/create-dictionary-waste-dto';
import { GetDictionaryFilterDto } from './dto/get-dictionary-filter-dto';

@Controller('dictionary-waste')
export class DictionaryWasteController {
  constructor(private dictionaryWasteService: DictionaryWasteService) { }

  @Get()
  getDictionaryWaste(
    @Query() filterDto: GetDictionaryFilterDto,
  ): Promise<DictionaryWaste[]> {
    if (Object.keys(filterDto).length) {
      return this.dictionaryWasteService.getDictionaryWaste(filterDto);
    } else {
      return this.dictionaryWasteService.getDictionaryWaste(filterDto);
    }
  }
  @Get('/:id')
  getDictionaryWasteById(@Param('id') id: string): Promise<DictionaryWaste> {
    return this.dictionaryWasteService.getDictionaryWasteById(id);
  }
  @Post()
  createDictionaryWaste(
    @Body()
    createDictionaryWasteDto: CreateDictionaryWasteDto,
  ): Promise<DictionaryWaste> {
    return this.dictionaryWasteService.createDictionaryWaste(
      createDictionaryWasteDto,
    );
  }
  @Delete('/:id')
  async deleteDictionaryWaste(@Param('id') id: string): Promise<void> {
    return this.dictionaryWasteService.deleteDictionaryWaste(id);
  }
  // @Patch('/:id/status')
  // updateDictionaryWasteStatus(
  //   @Param('id') id: string,
  //   @Body() updateDictionaryStatusDto: UpdateDictionaryWasteDto,
  // ): DictionaryWaste {
  //   const { status } = updateDictionaryStatusDto;
  //   return this.dictionaryWasteService.updateDictionaryWasteStatus(id, status);
  // }
}
