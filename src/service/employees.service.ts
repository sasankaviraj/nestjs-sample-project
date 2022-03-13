import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployeeSaveDto } from 'src/employees/dto/employeesave.dto';
import { EmployeeSearchDto } from 'src/employees/dto/employeesearch.dto';
import { EmployeeUpdate } from 'src/employees/dto/employeeupdate.dto';
import { EmployeeRepository } from 'src/repository/employee.repository';
import { Employee } from '../schemas/employee.schema';

@Injectable()
export class EmployeesService {

    constructor(private employeeRepository:EmployeeRepository){}

    async getAllEmployees():Promise<Employee[]>{
        return await this.employeeRepository.findAll();
    }

    async createEmployee(employeeSaveDto:EmployeeSaveDto): Promise<Employee>{
        return await this.employeeRepository.create(employeeSaveDto);
    }
        
    async searchEmployee(employeeSearchDto:EmployeeSearchDto){
        
        return await this.employeeRepository.search(employeeSearchDto);
    }

    async findEmployeeById(id:string):Promise<Employee>{
        let employee = await this.employeeRepository.findById(id);
        if(!employee){
            throw new NotFoundException('Employee Does ot Exists');
        }
        return employee;
    }

    async updateEmployee(employeeUpdate:EmployeeUpdate,id:string):Promise<Employee>{
        return await this.employeeRepository.update(employeeUpdate,id);
    }

    async deleteEmployeee(id:string) :Promise<Boolean>{
        return await this.employeeRepository.delete(id);
    }
}
