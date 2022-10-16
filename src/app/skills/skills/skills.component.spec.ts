import { ComponentFixture, fakeAsync, flush, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { UrlSegment } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { CssClassPipe } from 'src/app/shared/css-class.pipe';
import { MockSkillService } from '../mocks/mock-skill-service';
import { mockSkills } from '../mocks/mock-skills';
import { Skill } from '../skill';
import { SkillService, SkillState } from '../skill.service';
import { SkillComponent } from '../skill/skill.component';

import { SkillsComponent } from './skills.component';



fdescribe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let skillService:Partial<SkillService>;

  beforeEach(async () => {

    // skillService = jasmine.createSpyObj('SkillService',['getSkills','loading$','skills$','error$']);
    // skillService.skills$.and.returnValue(of(mockSkills));

    await TestBed.configureTestingModule({
      imports: [ SkillsComponent,SkillComponent,CssClassPipe,MatSnackBarModule ],
      providers:[
        {provide:SkillService,useClass:MockSkillService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    skillService=TestBed.inject(SkillService);
  });

  it('Initially should show loading then should show the skills', waitForAsync(() => {
    const debugElement = fixture.debugElement;
    let loadingElement= debugElement.query(By.css('#loadingSkills'));

    expect(loadingElement).toBeDefined();
    const headingElement = loadingElement.nativeElement;
    expect(headingElement.textContent).toContain('Loading Skills.....');

    let skillElement = debugElement.query(By.css('#showSkills'));
    expect(skillElement).toBeNull();

    fixture.whenStable().then(()=>{
      fixture.detectChanges();

      loadingElement= debugElement.query(By.css('#loadingSkills'));
      expect(loadingElement).toBeNull();
 
      skillElement = debugElement.query(By.css('#showSkills'));
      console.log(skillElement);
      expect(skillElement).toBeDefined(); 
    })
  }));


});
