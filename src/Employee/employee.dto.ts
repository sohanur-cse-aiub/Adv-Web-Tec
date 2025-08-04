import { IsBoolean, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateEmployeeDto {
  @IsOptional()
  @IsString()
  fullName?: string;

  @IsNumber()
  phone: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}













/*import { IsString, IsEmail, IsNumber, MinLength,IsOptional, Matches, IsIn, IsNotEmpty } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail({}, { message: 'Invalid email format' })
  @Matches(/^[\w-.]+@aiub\.edu$/, { message: 'Email must be in aiub.edu domain' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @Matches(/^(?=.*[A-Z]).*$/, { message: 'Password must contain at least one uppercase letter' })
  Password: string;

  @IsString()
  @IsIn(['male', 'female'], { message: 'Gender must be either male or female' })
  Gender: string;

   @IsOptional()
    @IsString()
    fullName: string;
  
    @IsNumber()
    phone: number;
}*/