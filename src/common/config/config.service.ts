import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

import { EnvironmentVariables } from './environment-variables';

@Injectable()
export class ConfigService extends NestConfigService<EnvironmentVariables> {}
