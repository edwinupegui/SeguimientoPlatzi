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
} from '@nestjs/common';

import { Response } from 'express';

import { ProductsService } from '../../services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products limit ${limit} offset ${offset} brand ${brand}`,
    // };
    return this.productService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filtro`;
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id') id: string) {
    // response.status(200).send({
    //   id,
    // });
    return this.productService.findOne(+id);
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'crear',
    //   payload,
    // };
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productService.update(+id, payload);
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
