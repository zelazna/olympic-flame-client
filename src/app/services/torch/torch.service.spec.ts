import { TestBed, inject } from '@angular/core/testing';

import { TorchService } from './torch.service';

describe('TorchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TorchService]
    });
  });

  it('should be created', inject([TorchService], (service: TorchService) => {
    expect(service).toBeTruthy();
  }));
});
