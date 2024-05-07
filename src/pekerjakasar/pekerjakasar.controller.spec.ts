import { Test, TestingModule } from '@nestjs/testing';
import { PekerjakasarController } from './pekerjakasar.controller';
import { PekerjakasarService } from './pekerjakasar.service';

describe('PekerjakasarController', () => {
  let controller: PekerjakasarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PekerjakasarController],
      providers: [PekerjakasarService],
    }).compile();

    controller = module.get<PekerjakasarController>(PekerjakasarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
