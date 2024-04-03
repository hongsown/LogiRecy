import { IsEnum, IsOptional, IsString } from 'class-validator';
import { StatusWaste } from '../dictionary-waste.model';

export class GetDictionaryFilterDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsEnum(StatusWaste)
  status?: string;
}
