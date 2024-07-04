import { IsNotEmpty } from 'class-validator';

export class CreateDictionaryWasteDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  howToRecycle: string;

  @IsNotEmpty()
  image: string;
}
