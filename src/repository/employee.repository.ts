import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Employee, EmployeeDocument } from "src/schemas/employee.schema";
import { Model } from "mongoose";
import { EmployeeSaveDto } from "src/employees/dto/employeesave.dto";
import { EmployeeSearchDto } from "src/employees/dto/employeesearch.dto";
import { EmployeeUpdate } from "src/employees/dto/employeeupdate.dto";

@Injectable()
export class EmployeeRepository{

    constructor(@InjectModel(Employee.name) private employeeModel:Model<EmployeeDocument>){}

    async create(employeeSaveDto:EmployeeSaveDto):Promise<Employee>{
        let newEmployee = new this.employeeModel(employeeSaveDto);
        return await newEmployee.save();
    }

    async findAll():Promise<Employee[]>{
        return await this.employeeModel.find();
    }

    async search(employeeSearchDto:EmployeeSearchDto){
        let employeeList : Employee[] = [];
        const {status,name} = employeeSearchDto;
        employeeList = await this.employeeModel.find();
        if(status){
            return  employeeList.filter(employee=> employee.status === status);
        }if(name){
            return  employeeList.filter(employee=> employee.firstName.includes(name) || employee.lastName.includes(name));
        }
        
    }

    async findById(id:string):Promise<Employee>{
        return await this.employeeModel.findById(id);
    }

    async update(employeeUpdate:EmployeeUpdate,id:string):Promise<Employee>{
        const {nearestCity} = employeeUpdate;
        return await this.employeeModel.findByIdAndUpdate(id,employeeUpdate);
    }

    async delete(id:string):Promise<Boolean>{
        let isDeleted = false;
        isDeleted = await this.employeeModel.findByIdAndDelete(id);
        if(isDeleted){
            isDeleted = true;
        }
        return isDeleted;
    }
}