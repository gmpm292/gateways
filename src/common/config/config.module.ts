import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import { ConfigService } from './config.service';
import { getEnvFilesToLoad } from './helpers/loader.helper';
import { validate } from './helpers/validate.helper';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      cache: true,
      expandVariables: true,
      envFilePath: getEnvFilesToLoad(),
      validate,
    }),
  ],
  providers: [ConfigService],
  exports: [NestConfigModule, ConfigService],
})
export class ConfigModule {}
