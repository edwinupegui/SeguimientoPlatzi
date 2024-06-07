import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from './config';
@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASK') private tasks: any[],
    @Inject('PG') private clientPg: Client,
    // private config: ConfigService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    console.log(this.tasks);
    // const apiKey = this.config.get<string>('API_KEY');
    // const dbName = this.config.get('DATABASE_NAME');
    const apiKey = this.configService.apiKey;
    const dbName = this.configService.database.name;
    return `Hello World! ${apiKey} ${dbName}`;
  }

  getTasks() {
    return new Promise((resolve, reject) => {
      this.clientPg.query('SELECT * FROM tasks', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.rows);
      });
    });
  }
}
