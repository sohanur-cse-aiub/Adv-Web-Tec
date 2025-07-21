import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  getEmployee(): string {
    return 'Employee data';
  }
}