import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('/products/filter')
  getProductFilter() {
    return `yo soy un filtro`;
  }

  @Get('/products/:id')
  getProduct(@Param('id') id: string) {
    return `product ${id}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit ${limit} offset ${offset} brand ${brand}`;
  }

  @Get('/categories/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return `product ${productId}
            category ${categoryId}`;
  }
}
