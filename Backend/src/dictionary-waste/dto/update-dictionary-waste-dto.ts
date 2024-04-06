import { IsEnum } from 'class-validator';
import { StatusWaste } from '../dictionary-waste.status-enum';

export class UpdateDictionaryWasteDto {
  @IsEnum(StatusWaste)
  status: StatusWaste;
}
