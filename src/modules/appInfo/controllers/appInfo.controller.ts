import { Controller, Get } from '@nestjs/common';
import { AppInfoService } from '../services/appInfo.service';

@Controller()
export class AppInfoController {
  constructor(private readonly appService: AppInfoService) {}

  @Get()
  public appInfo() {
    return this.appService.appInfo();
  }
}
