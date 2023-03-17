import { Module } from '@nestjs/common';

import { AppInfoModule } from './modules/appInfo/appInfo.module';
import { ConfigModule } from './common/config';
import { CoreModule } from './core/core.module';
import { DatabaseModule } from './common/database';
import { GraphqlModule } from './common/graphql';

@Module({
  imports: [
    AppInfoModule,
    ConfigModule,
    CoreModule,
    DatabaseModule,
    GraphqlModule,
  ],
})
export class AppModule {}
