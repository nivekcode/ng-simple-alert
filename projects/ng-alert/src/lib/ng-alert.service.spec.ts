import { TestBed } from '@angular/core/testing';

import { NgAlertService } from './ng-alert.service';

describe('NgAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgAlertService = TestBed.get(NgAlertService);
    expect(service).toBeTruthy();
  });
});
