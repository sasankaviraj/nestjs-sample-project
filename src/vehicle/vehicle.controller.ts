import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Vehicle } from 'src/schemas/vehicle.schema';
import { VehicleService } from 'src/service/vehicle.service';
import { VehicleSaveDto } from './dto/vehiclesave.dto';

@Controller('vehicle')
export class VehicleController {

    constructor(private vehicleService:VehicleService){}

    @Post()
    @UsePipes(ValidationPipe)
    async createVehicle(@Body() vehicleSaveDto:VehicleSaveDto){
        return await this.vehicleService.create(vehicleSaveDto);
    }
    @Get()
    async findVehicles():Promise<Vehicle[]>{
        return await this.vehicleService.findAll();
    }
}
