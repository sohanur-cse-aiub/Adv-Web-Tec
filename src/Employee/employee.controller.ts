import { Controller, Post, Body, Patch, Param, Get, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './create-employee.dto';
import { UpdatePhoneDto } from './update-phone.dto';

@Controller('employee')
export class EmployeeController {
  getEmployee(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() dto: CreateEmployeeDto): Promise<Employee> {
    return this.employeeService.create(dto);
  }

  @Patch(':id/phone')
  updatePhone(
    @Param('id') id: number,
    @Body() dto: UpdatePhoneDto,
  ): Promise<Employee> {
    return this.employeeService.updatePhone(id, dto.phone);
  }

  @Get('null-fullname')
  getUsersWithNullFullName(): Promise<Employee[]> {
    return this.employeeService.getUsersWithNullFullName();
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<string> {
    return this.employeeService.deleteById(id);
  }
}























/*import { Body, Controller, Get,Patch,Delete, Param, ParseIntPipe, Post, UploadedFile, UseInterceptors, UsePipes,ValidationPipe } from '@nestjs/common';
import {EmployeeService} from './employee.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage, MulterError } from 'multer';
import { UpdatePhoneDto } from './update-phone.dto';
import { CreateEmployeeDto } from './employee.dto';
@Controller('employee')
export class EmployeeController {
  getEmployee(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() data: CreateEmployeeDto) {
    return this.employeeService.addEmployee(data);
  }

  @Patch('update-phone')
  updatePhone(@Body() data: UpdatePhoneDto) {
    return this.employeeService.updatePhoneNumber(data);
  }

  @Get('null-fullname')
  getUsersWithNullFullName() {
    return this.employeeService.findEmployeesWithNullFullName();
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.employeeService.removeEmployeeById(id);
  }



/*
@Controller('employee')
export class EmployeeController {
  getEmployee(): any {
    return('Method not implemented.');
  }
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('hello')
  getHello(): string {
    return this.employeeService.getHello();
  }
  @Get ('photo/:id')
  getPhotoById(@Param('id', ParseIntPipe) id: number): string {
    return this.employeeService.getPhotoById(id);
  }
  @Post()
  @UsePipes(new ValidationPipe()) // Validates the data based on the DTO
 createEmployee(@Body() EmployeeData: CreateEmployeeDto) {
   return this.employeeService.addEmployee(EmployeeData);
  }
  @Get( 'getAll')
  getAllEmployees(){
    return[{name:'Riddho',email:'riddho@aiub',Password:'Riddho123', Gender: 'male', Phone: 1725676790}];
  }
  @Post('add')
  CreateEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    return{message: 'Employee created successfully', data: createEmployeeDto};
  
}*/
 /*@Post('upload')
 @UseInterceptors(FileInterceptor('file',
 { fileFilter: (req, file, cb) => {
 if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
 cb(null, true);
 else {
 cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
 }
 },
 limits: { fileSize: 2 * 1024 * 1024 }, 
 storage:diskStorage({
 destination: './uploads',
 filename: function (req, file, cb) {
 cb(null,Date.now()+file.originalname)
 },
 })
 }))
 uploadFile(@UploadedFile() file: Express.Multer.File) {
 if (!file) {
      return { message: 'No file uploaded or invalid file type/size.' };
    }
    return { message: 'File uploaded successfully', file };
  }


  /*@Post('create')
  createUser(@Body() data: CreateEmployeeDto) {
    return this.employeeService.addEmployee(data);
  }

  @Patch('update-phone')
  updatePhone(@Body() data: UpdatePhoneDto) {
    return this.employeeService.updatePhoneNumber(data);
  }

  @Get('null-fullname')
  getUsersWithNullFullName() {
    return this.employeeService.findEmployeesWithNullFullName();
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.employeeService.removeEmployeeById(id);
  }


}
}*/