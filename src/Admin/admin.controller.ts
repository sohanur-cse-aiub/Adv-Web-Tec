import{Controller, Get,Param,ParseIntPipe}from '@nestjs/common';
import {AdminService} from './admin.service';
 
@Controller('admin')
export class AdminController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly adminService: AdminService) {}
 
  @Get()
  getAdmin(): string {
    return this.adminService.getAdmin();
  }
  @Get('/:id')
  getAdminById(
    @Param('id', ParseIntPipe) adminId: number): string {
    return this.adminService.getAdminbyId(adminId);
  }
}