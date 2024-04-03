import { IsNotEmpty } from 'class-validator';

export class CreateDictionaryWasteDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
