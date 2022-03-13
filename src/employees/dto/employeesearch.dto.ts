import { IsIn } from 'class-validator';
import { EmployeeStatus } from 'src/enums/employeestatus';

export class EmployeeSearchDto{
    name:string;
    @IsIn(Object.values(EmployeeStatus))
    status:EmployeeStatus
}
