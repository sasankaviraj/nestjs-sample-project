import { Injectable } from '@nestjs/common';
import { VehicleRepository } from 'src/repository/vehicle.repository';
import { Vehicle } from 'src/schemas/vehicle.schema';
import { VehicleSaveDto } from 'src/vehicle/dto/vehiclesave.dto';

@Injectable()
export class VehicleService {

    constructor(private vehicleRepository:VehicleRepository){}

    async create(vehicleSaveDto:VehicleSaveDto):Promise<Vehicle>{
        return await this.vehicleRepository.create(vehicleSaveDto);
    }

    async findAll(): Promise<Vehicle[]>{
        return await this.vehicleRepository.findAll();
    }
}
