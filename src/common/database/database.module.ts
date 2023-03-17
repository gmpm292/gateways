import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule, ConfigService } from '../config';
import { isRemote } from './helpers/isDBRemote.helper';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',

        host: configService.get('TYPEORM_HOST'),
        port: +configService.get<number>('TYPEORM_PORT'),
        username: configService.get('TYPEORM_USERNAME'),
        password: configService.get('TYPEORM_PASSWORD'),
        database: configService.get('TYPEORM_DATABASE'),
        ssl: isRemote() ? { ca: configService.get('SSL_CERT') } : false,

        entities: ['**/*.entity{.ts,.js}'],
        migrationsTableName: 'migrations',
        migrations: ['src/migrations/*.ts'],
        cli: {
          migrationsDir: 'src/migrations',
        },

        autoLoadEntities: true,
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
