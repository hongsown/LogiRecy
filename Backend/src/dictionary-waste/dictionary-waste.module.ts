import { Module } from '@nestjs/common';
import { DictionaryWasteController } from './dictionary-waste.controller';
import { DictionaryWasteService } from './dictionary-waste.service';

@Module({
  controllers: [DictionaryWasteController],
  providers: [DictionaryWasteService],
})
export class DictionaryWasteModule {}
