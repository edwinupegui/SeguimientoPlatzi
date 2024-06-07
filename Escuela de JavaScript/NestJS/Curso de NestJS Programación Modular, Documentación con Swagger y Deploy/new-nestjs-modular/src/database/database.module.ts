import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from './../config';

const API_KEY = 'gd9qwedqdhqw8ey';
const API_KEY_PROD = 'dlknwednaswkdnx';

// client.query('SELECT * FROM tasks', (err, res) => {
//   console.error(err);
//   console.log(res.rows);
// });

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'development' ? API_KEY : API_KEY_PROD,
    },
    {
      provide: 'PG',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { database, host, password, port, user } = configService.postgres;
        console.log(user);
        const client = new Client({
          user,
          host,
          database,
          password,
          port,
        });

        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['API_KEY', 'PG'],
})
export class DatabaseModule {}
