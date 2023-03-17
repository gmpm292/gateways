import { Module } from '@nestjs/common';
import { AppInfoController } from './controllers/appInfo.controller';
import { AppInfoResolver } from './resolvers/appInfo.resolver';
import { AppInfoService } from './services/appInfo.service';

@Module({
  imports: [],
  controllers: [AppInfoController],
  providers: [AppInfoService, AppInfoResolver],
})
export class AppInfoModule {}
