import { IsNotEmpty } from 'class-validator';
import { Environment } from './environment.enum';

export class EnvironmentVariables {
  // DATABASE
  @IsNotEmpty()
  public TYPEORM_HOST: string;
  @IsNotEmpty()
  public TYPEORM_PORT: number;
  @IsNotEmpty()
  public TYPEORM_USERNAME: string;
  @IsNotEmpty()
  public TYPEORM_PASSWORD: string;
  @IsNotEmpty()
  public TYPEORM_DATABASE: string;

  // SECURITY
  // The time must be specified in milliseconds
  //@IsNotEmpty()
  //public ACCESS_TOKEN_EXPIRE_IN: string;
  //@IsNotEmpty()
  //public ACCESS_TOKEN_SECRET: string;
  // The time must be specified in milliseconds
  //@IsNotEmpty()
  //public CONFIRMATION_TOKEN_EXPIRE_IN: string;
  //@IsNotEmpty()
  //public CONFIRMATION_TOKEN_SECRET: string;
  // Origins allowed to query the API. To insert multiple values separate by comma (,)
  @IsNotEmpty()
  public CORS_ORIGIN: string;
  // The time must be specified in milliseconds
  //@IsNotEmpty()
  //public REFRESH_TOKEN_EXPIRE_IN: string;
  //@IsNotEmpty()
  //public REFRESH_TOKEN_SECRET: string;

  // SYSTEM
  //possible environments: 'development', 'production','test'
  @IsNotEmpty()
  public NODE_ENV: Environment;
  @IsNotEmpty()
  public PORT: number;
}
