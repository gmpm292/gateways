import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { ConfigModule } from './common/config';
import { DatabaseModule } from './common/database';
import { GraphqlModule } from './common/graphql';

@Module({
  imports: [CoreModule, ConfigModule, DatabaseModule, GraphqlModule],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
