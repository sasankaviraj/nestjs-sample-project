import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { EmployeeTier } from './enums/employeetier';

@Injectable()
export class EmployeeTierValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(!(value.tier in EmployeeTier)){
      throw new BadRequestException(value.tier + ' is not a valid tier')
    }
    return value;
  }
}
