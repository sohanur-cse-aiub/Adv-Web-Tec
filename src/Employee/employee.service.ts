import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './employee.dto';

@Injectable()
export class EmployeeService {
  users: any;
  addEmployee(employeeData: CreateEmployeeDto) {
    return('Method not implemented.');
  }
  getPhoto(id: number): string {
    return('Method not implemented.');
  }
  getHello(): string {
    return 'This is my world.';
  }
  getPhotoById(id: number): string {
    return `Photo with ID: ${id}`;
  }
  addUser(user: { name: string; email: string }) {
    this.users.push(user);
    return {
      message: 'User created successfully',
      user,
    };
  }
}
