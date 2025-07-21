import{Controller, Get}from '@nestjs/common';
import {EmployeeService} from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly adminService: EmployeeService) {}

  @Get()
  getEmployee(): string {
    return this.adminService.getEmployee();
  }
  @Get('hello')

  
  getHello(): string {
    return 'Hello from Employee!';
  }
}