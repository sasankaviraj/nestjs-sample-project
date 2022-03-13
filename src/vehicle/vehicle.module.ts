import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleRepository } from 'src/repository/vehicle.repository';
import { Vehicle, VehicleSchema } from 'src/schemas/vehicle.schema';
import { VehicleService } from 'src/service/vehicle.service';
import { VehicleController } from './vehicle.controller';

@Module({
  imports:[MongooseModule.forFeature([{name:Vehicle.name,schema:VehicleSchema}])],
  controllers: [VehicleController],
  providers: [VehicleService, VehicleRepository]
})
export class VehicleModule {}
