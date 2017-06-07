import { TestBed, inject } from '@angular/core/testing';

import { ChildinfoService } from './childinfo.service';

describe('ChildinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildinfoService]
    });
  });

  it('should ...', inject([ChildinfoService], (service: ChildinfoService) => {
    expect(service).toBeTruthy();
  }));
});
