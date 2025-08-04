import { Injectable,Inject, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,IsNull } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './create-employee.dto';





@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepo: Repository<Employee>,
  ) {}

  async create(data: CreateEmployeeDto): Promise<Employee> {
    const employee = this.employeeRepo.create(data);
    return this.employeeRepo.save(employee);
  }

  async updatePhone(id: number, newPhone: number): Promise<Employee> {
    const employee = await this.employeeRepo.findOneBy({ id });
    if (!employee) throw new NotFoundException('Employee not found');

    employee.phone = newPhone;
    return this.employeeRepo.save(employee);
  }

  async getUsersWithNullFullName(): Promise<Employee[]> {
    return this.employeeRepo.findBy({
      fullName: IsNull(),
    });
  }

  async deleteById(id: number): Promise<string> {
    const result = await this.employeeRepo.delete(id);
    if (result.affected === 0) throw new NotFoundException('User not found');

    return `Employee with id ${id} deleted.`;
  }
}














/*import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { EmployeeEntity } from './employee.entity';
import { UpdatePhoneDto } from './update-phone.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepo: Repository<EmployeeEntity>,
  ) {}

  async addEmployee(data: CreateEmployeeDto) {
    const employee = this.employeeRepo.create({

    });
    await this.employeeRepo.save(employee);
    return { message: 'Employee created successfully', employee };
  }

  async updatePhoneNumber(data: UpdatePhoneDto) {
    const employee = await this.employeeRepo.findOne({ where: { id: data.id } });
    if (!employee) return { message: 'Employee not found' };

    employee.phone = data.phone;
    await this.employeeRepo.save(employee);
    return { message: 'Phone number updated', employee };
  }

  async findEmployeesWithNullFullName() {
    const employees = await this.employeeRepo.find({ where: { fullName: IsNull() } });
    return employees;
  }

  async removeEmployeeById(id: string) {
    const result = await this.employeeRepo.delete(id);
    return result.affected === 0
      ? { message: 'Employee not found' }
      : { message: 'Employee deleted successfully' };
  }
}*/





/*@Injectable()
export class EmployeeService {
 constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepo: Repository<EmployeeEntity>,
  ) {}

  async addEmployee(data: CreateEmployeeDto) {
    const employee = this.employeeRepo.create({
    fullName: data.fullName,
    phone: data.Phone,
  });
    await this.employeeRepo.save(employee);
    return {
      message: 'Employee created successfully',
      employee,
    };
  }

  async updatePhoneNumber(data: UpdatePhoneDto) {
    const employee = await this.employeeRepo.findOne({ where: { id: data.id } });
    if (!employee) return { message: 'Employee not found' };

    employee.phone = data.phone;
    await this.employeeRepo.save(employee);
    return { message: 'Phone number updated', employee };
  }
   async findEmployeesWithNullFullName() {
    const employees = await this.employeeRepo.find({ where: { fullName: IsNull() } });
    return employees;
  }

  async removeEmployeeById(id: string) {
    const result = await this.employeeRepo.delete(id);
    return result.affected === 0
      ? { message: 'Employee not found' }
      : { message: 'Employee deleted successfully' };
  }
 
 
  users: any;
  /*Employees:CreateEmployeeDto[] = [];
  addedEmployee(employeeData: CreateEmployeeDto) {
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
 /* getAllEmployees(){
    return this.Employees;
  }
  getPhotoById(id: number): string {
    return `Photo with ID: ${id}`;
  }
  /*addUser(user: { name: string; email: string }) {
    this.users.push(user);
    return {
      message: 'User created successfully',
      user,
    };
  }
}*/

