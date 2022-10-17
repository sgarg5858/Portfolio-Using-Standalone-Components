import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Skill } from "../skill";
import { SkillComponent } from "../skill/skill.component";

@Component({
    standalone:true,
    imports:[CommonModule,SkillComponent],
    template: `
      <app-skill
        [skill]="skill" (selected)="onSelected($event)">
      </app-skill>`
  })
 export class MockSkillsComponent {
    skill: Skill = {name: "Angular", experienceInYears: '3'};
  }