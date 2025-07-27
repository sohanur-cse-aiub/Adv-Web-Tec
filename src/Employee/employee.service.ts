import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './employee.dto';

@Injectable()
export class EmployeeService {
  users: any;
  Employees:CreateEmployeeDto[] = [];
  addEmployee(employeeData: CreateEmployeeDto) {
    this.Employees.push(employeeData);
    return {
      message: 'Employee created successfully',
      employee: employeeData,
      totalEmployees: this.Employees.length,
    };
  }
  getPhoto(id: number): string {
    return('Method not implemented.');
  }
  getHello(): string {
    return 'This is my world.';
  }
  getAllEmployees(){
    return this.Employees;
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

