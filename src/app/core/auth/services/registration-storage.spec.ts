import { TestBed } from '@angular/core/testing';

import { RegistrationStorage } from './registration-storage';

describe('RegistrationStorage', () => {
  let service: RegistrationStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
