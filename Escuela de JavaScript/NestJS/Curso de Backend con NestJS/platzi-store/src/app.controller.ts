import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Edwin el mejor';
  }

  @Get('/nuevo')
  newEndPoint() {
    return 'soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'con /asa/s';
  }
}
