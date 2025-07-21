import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AdminModule } from './Admin/admin.module';  

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
