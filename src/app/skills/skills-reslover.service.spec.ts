import { TestBed } from '@angular/core/testing';

import { SkillsResloverService } from './skills-reslover.service';

describe('SkillsResloverService', () => {
  let service: SkillsResloverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsResloverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
