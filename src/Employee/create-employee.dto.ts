import { IsBoolean, IsOptional, IsString, IsNumber, Min } from 'class-validator';

export class CreateEmployeeDto {
  @IsOptional()
  @IsString()
  fullName?: string;

  @IsNumber()
  @Min(0, { message: 'Phone number must be a non-negative number' })
  phone: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
