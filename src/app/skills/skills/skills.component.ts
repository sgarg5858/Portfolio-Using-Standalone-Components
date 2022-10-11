import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill, SkillService } from '../skill.service';
import { SkillComponent } from '../skill/skill.component';
import { CssClassPipe } from 'src/app/shared/css-class.pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule,SkillComponent,CssClassPipe],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute) { }
  skills:Skill[]=[];
  ngOnInit(): void {
    this.skills=this.activatedRoute.snapshot.data['skills'];
    // this.skillService.getSkills();
  }
  // getAnimationClass(index:number)
  // {
  //   return `skill-animate-${index}`;
  // }
}
