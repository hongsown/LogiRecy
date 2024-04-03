import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DetectWasteService } from './detect-waste.service';
import { DetectWasteController } from './detect-waste.controller';

@Module({
  imports: [HttpModule],
  providers: [DetectWasteService],
  controllers: [DetectWasteController],
})
export class DetectWasteModule {}
