import { Body, Controller, Get } from '@nestjs/common';
import { DetectWasteService } from './detect-waste.service';
import { GetDetectWasteDto } from './dto/get-detect-waste-dto';

@Controller('detect-waste')
export class DetectWasteController {
  constructor(private detectWasteService: DetectWasteService) {}

  @Get()
  getDetectWaste(@Body() urlImage: GetDetectWasteDto): void {
    this.detectWasteService.getDetectWaste(urlImage.urlImage);
  }
}
