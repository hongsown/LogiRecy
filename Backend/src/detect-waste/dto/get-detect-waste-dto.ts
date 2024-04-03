import { Optional } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';

export class GetDetectWasteDto {
  @IsNotEmpty()
  urlImage: string;

  @Optional()
  jsonData: Array<jsonDataDetectWaste>;
}

interface jsonDataDetectWaste {
  name: string;
}
