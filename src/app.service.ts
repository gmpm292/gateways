import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class AppService {
  public appInfo() {
    const { name, version, description } = JSON.parse(
      readFileSync('package.json', 'utf8'),
    );
    return {
      name,
      version,
      description,
    };
  }
}
