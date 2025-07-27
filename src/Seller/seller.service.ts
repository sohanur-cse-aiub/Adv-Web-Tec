import { Injectable } from '@nestjs/common';

@Injectable()
export class SellerService {
  getSeller(): string {
    return 'Hello World!';
  }
}