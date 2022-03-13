import { EmployeeStatus } from "src/enums/employeestatus";
import { EmployeeTier } from "src/enums/employeetier";
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

/*export const EmployeeSchema = ({ //plain mongoose wrapper
    id:String,  //string will be String in mongo
    firstName:String,
    lastName:String,
    designation:String,
    nearestCity:String,
    tier:EmployeeTier,
    status:EmployeeStatus
});*/

//nestjs wrapper
export type EmployeeDocument = Employee & Document;
@Schema()
export class Employee{
    @Prop()
    id:string;
    @Prop({required:true}) //can customize
    firstName:string;
    @Prop()
    lastName:string;
    @Prop()
    designation:string;
    @Prop()
    nearestCity:string;
    @Prop()
    tier:EmployeeTier;
    @Prop()
    status:EmployeeStatus
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);