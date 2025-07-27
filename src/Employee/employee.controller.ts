import { Body, Controller, Get, Param, ParseIntPipe, Post, UploadedFile, UseInterceptors, UsePipes,ValidationPipe } from '@nestjs/common';
import {EmployeeService} from './employee.service';
import { CreateEmployeeDto } from './employee.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage, MulterError } from 'multer';

@Controller('employee')
export class EmployeeController {
  getEmployee(): any {
    return('Method not implemented.');
  }
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
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
  @Get()
  getAllEmployees(){
    return[{name:'Riddho',email:'riddho@aiub',Password:'Riddho123', Gender: 'male', Phone: 1725676790}];
  }
  @Post()
  CreateEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    return{message: 'Employee created successfully', data: createEmployeeDto};
  
}
 @Post('upload')
 @UseInterceptors(FileInterceptor('file',
 { fileFilter: (req, file, cb) => {
 if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
 cb(null, true);
 else {
 cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
 }
 },
 limits: { fileSize: 30000 },
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


}