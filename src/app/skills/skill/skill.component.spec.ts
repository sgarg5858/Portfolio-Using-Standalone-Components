import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { MockSkillsComponent } from '../mocks/mock-skills-component';

import { SkillComponent } from './skill.component';

//This tests SkillComponent in a standalone manner!

fdescribe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SkillComponent,MatCardModule,MockSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
  });

  
  //This is like testing the Skill Component Standalone
  //We know this component will be used by SkillsComponemnt but SkillsComponent depends upon
  //SKillService if we try to test like its used SKillsComponent , then we will have to mock
  //a lot of stuff
  //But this component is very simple, it just takes data and renders it and that we can do
  it('should show the skill in the template using standlone method', () => {
    component.skill={name:"Angular",experienceInYears:"3"};
    fixture.detectChanges();
    const debugElement = fixture.debugElement;
    const skillElement = debugElement.query(By.css('.skill'));
    expect(skillElement).toBeDefined();
    expect(skillElement.nativeElement.textContent).toContain(component.skill.name);

  });
});




fdescribe('SkillComponent', () => {
  let testHost: MockSkillsComponent;
  let fixture: ComponentFixture<MockSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MockSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockSkillsComponent);
    testHost = fixture.componentInstance;
  });

  
  //This is like testing the Skill Component Standalone
  //We know this component will be used by SkillsComponemnt but SkillsComponent depends upon
  //SKillService if we try to test like its used SKillsComponent , then we will have to mock
  //a lot of stuff
  //But this component is very simple, it just takes data and renders it and that we can do
  //Without the noise of ngfor and SkillService!
  it('should show the skill in the template using Testhost method', () => {
    testHost.skill={name:"Angular",experienceInYears:"3"};
    fixture.detectChanges();
    const debugElement = fixture.debugElement;
    const skillElement = debugElement.query(By.css('.skill'));
    expect(skillElement).toBeDefined();
    expect(skillElement.nativeElement.textContent).toContain(testHost.skill.name);

  });
});


