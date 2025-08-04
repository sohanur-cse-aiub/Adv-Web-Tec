import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdatePhoneDto {
  @IsNotEmpty()
  @IsNumber()
  phone: number;
}










/*import { IsString, IsNumber } from 'class-validator';

export class UpdatePhoneDto {
  @IsString()
  id: string;

  @IsNumber()
  phone: number;
}*/
