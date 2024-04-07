import { Module } from '@nestjs/common';
import { DictionaryWasteController } from './dictionary-waste.controller';
import { DictionaryWasteService } from './dictionary-waste.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DictionaryWasteRepository } from './dictionary-waste-repository';
import { DictionaryWaste } from './dictionary-waste-entity';

@Module({
  imports: [TypeOrmModule.forFeature([DictionaryWaste])],
  controllers: [DictionaryWasteController],
  providers: [DictionaryWasteService, DictionaryWasteRepository],
})
export class DictionaryWasteModule {}
