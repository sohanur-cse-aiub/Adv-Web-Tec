import { Controller, Get } from '@nestjs/common';

@Controller('Admin')
export class AdminController {
  @Get()
  getAdmin(): string {
    return 'Admin data';
  }
}