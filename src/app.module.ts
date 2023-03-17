import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from './common/config';
import { DatabaseModule } from './common/database';
import { GraphqlModule } from './common/graphql';
import { AppResolver } from './app.resolver';

@Module({
  imports: [ConfigModule, GraphqlModule],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {
  constructor() {
    console.log(process.env);
  }
}
