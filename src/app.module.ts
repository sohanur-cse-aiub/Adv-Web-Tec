import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './Admin/admin.module';
import { AdminService} from './Admin/admin.service';
import { AdminController } from './Admin/admin.controller';


@Module({
  imports: [AdminModule],
  controllers: [AppController, AdminController],
  providers: [AppService, AdminService],
})
export class AppModule {}

