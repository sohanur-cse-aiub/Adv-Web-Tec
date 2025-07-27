import { Test, TestingModule } from '@nestjs/testing';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';

describe('AppController', () => {
  let sellerController: SellerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SellerController],
      providers: [SellerService],
    }).compile();

    sellerController = app.get<SellerController>(SellerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      
     expect(sellerController.getSeller()).toBe('Hello World!');

    });
  });
});