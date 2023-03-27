import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';
// export class UpdateEventDto{
//     name?: string;
//     description?: string;
//     when?: string;
//     address?: string;
// }

//npm i --save @nestjs/mapped-types

export class UpdateEventDto extends PartialType(CreateEventDto) {}
