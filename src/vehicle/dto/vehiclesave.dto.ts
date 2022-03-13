import { IsNotEmpty } from "class-validator"
import { Employee } from "src/schemas/employee.schema"

export class VehicleSaveDto{
    id:string
    @IsNotEmpty()
    make:string
    @IsNotEmpty()
    model:string
    vin:string
    @IsNotEmpty()
    employee:Employee
}