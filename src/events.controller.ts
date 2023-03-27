import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Patch,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { UpdateEventDto } from './update-event.dto';
import { Event } from './event.entity';
@Controller('/events')
export class EventController {
  private events: Event[] = [];
  @Get()
  FindAll() {
    // return [
    //   {id:1, name: 'phong'},
    //   {id:2, name: 'phong coc'}

    // ]
    return this.events;
  }
  @Get(':id')
  FindOne(@Param('id') id) {
    // return id;
    // return {id:1, name: 'phong'}
    const event = this.events.findIndex((event) => event.id === parseInt(id));
    return event;
  }
  @Post()
  create(@Body() input: CreateEventDto) {
    // return input
    const event = {
      ...input,
      when: new Date(input.when),
      id: this.events.length + 1,
    };
    this.events.push(event);
    return event;
  }
  @Patch(':id')
  updated(@Param('id') id, @Body() input: UpdateEventDto) {
    const index = this.events.findIndex((event) => event.id === parseInt(id));
    this.events[index] = {
      ...this.events[index],
      ...input,
      when: input.when ? new Date(input.when) : this.events[index].when,
    };
    return this.events[index];
  }
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) {
    this.events = this.events.filter((event) => event.id !== parseInt(id));
  }
}
