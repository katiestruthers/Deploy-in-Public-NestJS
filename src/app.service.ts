import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This was automatically deployed from GitHub Actions.';
  }
}
