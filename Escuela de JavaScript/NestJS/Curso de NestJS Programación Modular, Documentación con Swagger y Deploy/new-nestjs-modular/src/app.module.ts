import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

const API_KEY = 'gd9qwedqdhqw8ey';
const API_KEY_PROD = 'dlknwednaswkdnx';

@Module({
  imports: [UsersModule, ProductsModule, HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'development' ? API_KEY : API_KEY_PROD,
    },
    {
      provide: 'TASK',
      useFactory: async (http: HttpService) => {
        const request = http.get('https://jsonplaceholder.typicode.com/todos');
        const task = await lastValueFrom(request);
        return task.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
