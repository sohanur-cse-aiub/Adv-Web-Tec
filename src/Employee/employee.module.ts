import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
















/*import {Module} from '@nestjs/common';
import {EmployeeController} from './employee.controller';
import {EmployeeService} from './employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from './employee.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEntity]),], 
  controllers: [EmployeeController],
  providers: [EmployeeService],
}) 
export class EmployeeModule {} */