import { TestBed } from '@angular/core/testing';

import { AngularPressHoldButtonService } from './angular-press-hold-button.service';

describe('AngularPressHoldButtonService', () => {
  let service: AngularPressHoldButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularPressHoldButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
