import { TestBed } from '@angular/core/testing';

import { MineralDataService } from '../services/mineral-data.service';

describe('MineralDataService', () => {
  let service: MineralDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MineralDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
