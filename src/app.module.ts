import { Module } from '@nestjs/common';

import { ConfigModule } from './common/config';
import { DatabaseModule } from './common/database';
import { GraphqlModule } from './common/graphql';
import { AppInfoModule } from './modules/appInfo/appInfo.module';

@Module({
  imports: [AppInfoModule, ConfigModule, DatabaseModule, GraphqlModule],
})
export class AppModule {}
