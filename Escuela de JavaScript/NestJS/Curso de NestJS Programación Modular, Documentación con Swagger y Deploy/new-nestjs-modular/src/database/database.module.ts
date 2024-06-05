import { Module, Global } from '@nestjs/common';

const API_KEY = 'gd9qwedqdhqw8ey';
const API_KEY_PROD = 'dlknwednaswkdnx';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'development' ? API_KEY : API_KEY_PROD,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
