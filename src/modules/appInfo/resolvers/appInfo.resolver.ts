import { Query, Resolver } from '@nestjs/graphql';

import { AppInfoService } from '../services/appInfo.service';

@Resolver()
export class AppInfoResolver {
  constructor(private readonly appInfoService: AppInfoService) {}

  @Query('appInfo')
  public appInfo() {
    return this.appInfoService.appInfo();
  }
}
