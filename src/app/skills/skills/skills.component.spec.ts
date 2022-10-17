import { ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick, waitForAsync } from '@angular/core/testing';
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
    skillService=TestBed.inject(SkillService);
  });

  // We can pass a function called “done” into our test. 
  // When we do this, Karma will wait for us to call done 
  // before it runs another test, or it will time out and 
  // fail after a default 5 seconds.
  it('Initially should show loading then should show the skills using done', (done) => {
    fixture.detectChanges();
    const debugElement = fixture.debugElement;
    let loadingElement= debugElement.query(By.css('#loadingSkills'));

    expect(loadingElement).toBeDefined();
    const headingElement = loadingElement.nativeElement;
    expect(headingElement.textContent).toContain('Loading Skills.....');

    let skillElement = debugElement.query(By.css('#showSkills'));
    expect(skillElement).toBeNull();
    fixture.detectChanges();
    setTimeout(()=>{

      fixture.detectChanges();

      loadingElement= fixture.debugElement.query(By.css('#loadingSkills'));
      expect(loadingElement).toBeNull();
 
      skillElement = debugElement.query(By.css('#showSkills'));
      expect(skillElement).toBeDefined(); 
      done();

    },2000)
  });
  // This works, but it’s my least favorite option. 
  // It makes this test slow because Karma always has to wait 
  // 0.5 seconds before moving on to the next test. 
  // It’s also not very descriptive or reliable. 
  // Why did we wait 500 ms? 
  // What should a developer do if this test fails on their computer?


  // We’ve solved one of our problems: we’re no longer waiting an arbitrary amount of time. 
  // That means the test will run as fast as it can, but it will still have to wait about 500 ms
  //  for the subject to emit its data.
  it('Initially should show loading then should show the skills using fixture.whenStable', waitForAsync(() => {
    fixture.detectChanges();
    const debugElement = fixture.debugElement;
    let loadingElement= debugElement.query(By.css('#loadingSkills'));

    expect(loadingElement).toBeDefined();
    const headingElement = loadingElement.nativeElement;
    expect(headingElement.textContent).toContain('Loading Skills.....');

    let skillElement = debugElement.query(By.css('#showSkills'));
    expect(skillElement).toBeNull();
    fixture.detectChanges();

    fixture.whenStable().then(()=>{
      fixture.detectChanges();

      loadingElement= fixture.debugElement.query(By.css('#loadingSkills'));
      expect(loadingElement).toBeNull();
 
      skillElement = debugElement.query(By.css('#showSkills'));
      expect(skillElement).toBeDefined(); 
    })
  }));

  // The fakeAsync zone has some special properties. 
  // The one we care about is that time does not pass normally in it.
  //  Instead, we can use the tick() function to simulate the passage of time
  it('Initially should show loading then should show the skills using fakeAsync', fakeAsync(() => {
    fixture.detectChanges();
    const debugElement = fixture.debugElement;
    let loadingElement= debugElement.query(By.css('#loadingSkills'));

    expect(loadingElement).toBeDefined();
    const headingElement = loadingElement.nativeElement;
    expect(headingElement.textContent).toContain('Loading Skills.....');

    let skillElement = debugElement.query(By.css('#showSkills'));
    expect(skillElement).toBeNull();
    
    flush();
    fixture.detectChanges();

      loadingElement= fixture.debugElement.query(By.css('#loadingSkills'));
      expect(loadingElement).toBeNull();
 
      skillElement = debugElement.query(By.css('#showSkills'));
      expect(skillElement).toBeDefined(); 
  }));


});
