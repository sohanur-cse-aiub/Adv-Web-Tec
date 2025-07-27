import { Controller, Get } from '@nestjs/common';
import { SellerService } from './seller.service';

@Controller()
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Get()
  getSeller(): string {
    return this.sellerService.getSeller();
  }
}