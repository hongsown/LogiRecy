import { Module } from '@nestjs/common';
import { DictionaryWasteModule } from './dictionary-waste/dictionary-waste.module';

@Module({
  imports: [DictionaryWasteModule],
})
export class AppModule {}
