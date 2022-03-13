import { InjectModel } from "@nestjs/mongoose";
import { Vehicle, VehicleDocument } from "src/schemas/vehicle.schema";
import { Model } from 'mongoose';
import { VehicleSaveDto } from "src/vehicle/dto/vehiclesave.dto";

export class VehicleRepository{

    constructor(@InjectModel(Vehicle.name) private vehicleModel:Model<VehicleDocument>){}

    async create(vehicleSaveDto:VehicleSaveDto):Promise<Vehicle>{
        let newVehicle = new this.vehicleModel(vehicleSaveDto);
        return await newVehicle.save();
    }

    async findAll():Promise<Vehicle[]>{
        return this.vehicleModel.find().populate('employee');
    }
}