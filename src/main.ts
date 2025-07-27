import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AdminModule } from './Admin/admin.module';  
import { EmployeeModule } from './Employee/employee.module';
import { SellerModule } from './Seller/seller.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true })); 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
