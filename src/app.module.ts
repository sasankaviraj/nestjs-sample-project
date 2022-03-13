import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_DB_CONNECTION } from './app.properties';
import { EmployeesModule } from './employees/employees.module';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [EmployeesModule,MongooseModule.forRoot(MONGO_DB_CONNECTION), VehicleModule]
})
export class AppModule {}
