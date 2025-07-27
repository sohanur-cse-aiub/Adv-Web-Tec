import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './Admin/admin.module';
import { AdminService} from './Admin/admin.service';
import { AdminController } from './Admin/admin.controller';
import { EmployeeModule } from './Employee/employee.module';
import { EmployeeService } from './Employee/employee.service';
import { EmployeeController } from './Employee/employee.controller';
import { SellerModule } from './Seller/seller.module';  
import { SellerService } from './Seller/seller.service';
import { SellerController } from './Seller/seller.controller';


@Module({
  imports: [AdminModule,EmployeeModule, SellerModule],
  controllers: [AppController, AdminController, EmployeeController, SellerController],
  providers: [AppService, AdminService, EmployeeService, SellerService],
})
export class AppModule {}

