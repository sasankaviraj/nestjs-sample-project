import { Body, Controller, Get, Param, Post, Query, Put, Delete, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { Employee } from '../schemas/employee.schema';
import { EmployeeTierValidationPipe } from 'src/employee-tier-validation.pipe';
import { EmployeeSaveDto } from './dto/employeesave.dto';
import { EmployeeSearchDto } from './dto/employeesearch.dto';
import { EmployeeUpdate } from './dto/employeeupdate.dto';
import { EmployeesService } from 'src/service/employees.service';

@Controller('employees')
export class EmployeesController {

    constructor(private employeeService:EmployeesService){}

    @Get()
    @UsePipes(ValidationPipe)
    async getAllEmployees(@Query() param:EmployeeSearchDto): Promise<Employee[]>{
        return await this.employeeService.getAllEmployees();
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new EmployeeTierValidationPipe()) //EmployeeTierValidationPipe using here to validate tier which cannot input invalid tier number
    async createEmployee(@Body() employeeSaveDto: EmployeeSaveDto): Promise<Employee>{
        return await this.employeeService.createEmployee(employeeSaveDto);
    }

    @Get('/:id')
    async findEmployeeById(@Param('id') id:string): Promise<Employee>{
        return await this.employeeService.findEmployeeById(id);
    }

    @Put('/:id')
    async updateEmployee(@Param('id') id:string, @Body() employeeUpdateDto:EmployeeUpdate) : Promise<Employee>{
        return await this.employeeService.updateEmployee(employeeUpdateDto,id);
    }

    @Delete('/:id')
    deleteEmployee(@Param('id') id:string): Promise<Boolean>{
        let isDeleted = this.employeeService.deleteEmployeee(id);

        if(!isDeleted){
            throw new NotFoundException('Employee Does ot Exists');
        }else{
            return isDeleted;
        }

    }    

}
