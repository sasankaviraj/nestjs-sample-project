import { IsNotEmpty, NotEquals } from 'class-validator';
import { EmployeeStatus } from 'src/enums/employeestatus';
import { EmployeeTier } from 'src/enums/employeetier';

export class EmployeeSaveDto {
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  @NotEquals('CEO') //stop creating ceo designation
  designation: string;
  @IsNotEmpty()
  nearestCity: string;
  tier: EmployeeTier;
  status: EmployeeStatus;
}
