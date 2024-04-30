import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit ${limit} offset ${offset} brand ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filtro`;
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Res() response: Response, @Param('id') id: string) {
    response.status(200).send({
      id,
    });
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
      test: 'test data',
    };
  }
}
