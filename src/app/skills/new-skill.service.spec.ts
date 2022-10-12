import { TestBed } from '@angular/core/testing';

import { NewSkillService } from './new-skill.service';

describe('NewSkillService', () => {
  let service: NewSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
