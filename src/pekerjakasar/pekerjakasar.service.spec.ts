import { Test, TestingModule } from '@nestjs/testing';
import { PekerjakasarService } from './pekerjakasar.service';

describe('PekerjakasarService', () => {
  let service: PekerjakasarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PekerjakasarService],
    }).compile();

    service = module.get<PekerjakasarService>(PekerjakasarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
