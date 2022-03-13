import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeRepository } from 'src/repository/employee.repository';
import { Employee, EmployeeSchema } from 'src/schemas/employee.schema';
import { EmployeesService } from 'src/service/employees.service';
import { EmployeesController } from './employees.controller';

@Module({
  imports:[MongooseModule.forFeature([{name:Employee.name,schema:EmployeeSchema}])],
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeeRepository]
})
export class EmployeesModule {}
