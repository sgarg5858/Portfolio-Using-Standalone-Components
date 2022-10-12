import { TestBed } from '@angular/core/testing';

import { NewExperienceService } from './new-experience.service';

describe('NewExperienceService', () => {
  let service: NewExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
