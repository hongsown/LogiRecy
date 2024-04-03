import { Module } from '@nestjs/common';
import { DictionaryWasteModule } from './dictionary-waste/dictionary-waste.module';
import { DetectWasteModule } from './detect-waste/detect-waste.module';

@Module({
  imports: [DictionaryWasteModule, DetectWasteModule],
})
export class AppModule {}
