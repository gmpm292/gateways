import { Module } from '@nestjs/common';

import { ConfigModule } from './common/config';
import { GraphqlModule } from './common/graphql';
import { AppInfoModule } from './modules/appInfo/appInfo.module';

@Module({
  imports: [AppInfoModule, ConfigModule, GraphqlModule],
})
export class AppModule {}
