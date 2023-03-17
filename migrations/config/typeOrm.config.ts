import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { isRemote } from '../helpers/isDBRemote.helper';
import { listEntities } from './listEntities.config';
import { listMigrations } from './listMigrations.config';

config();

const configService = new ConfigService();

const dataSource = new DataSource({
  type: 'postgres',
  host: configService.get('TYPEORM_HOST'),
  port: +configService.get<number>('TYPEORM_PORT'),
  username: configService.get('TYPEORM_USERNAME'),
  password: configService.get('TYPEORM_PASSWORD'),
  database: configService.get('TYPEORM_DATABASE'),
  synchronize: false,
  ssl: isRemote() ? { ca: configService.get('SSL_CERT') } : false,
  entities: listEntities,
  migrations: listMigrations,

  /**
   * TODO
   * La librería de TypeORM tiene un error al cargar las entidades,
   * cuando se actualice y funcione bien debe trabajar como se
   * define a continuación.
   */
  //entities: ['src/*/.entity.ts'],
  //migrations: ['migrations/*.ts'],
});
export default dataSource;
