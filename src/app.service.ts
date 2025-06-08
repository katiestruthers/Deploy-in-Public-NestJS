import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This was deployed automatically from GitHub Actions.';
  }
}
