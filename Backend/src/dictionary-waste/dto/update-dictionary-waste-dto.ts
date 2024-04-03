import { IsEnum } from 'class-validator';
import { StatusWaste } from '../dictionary-waste.model';

export class UpdateDictionaryWasteDto {
  @IsEnum(StatusWaste)
  status: StatusWaste;
}
