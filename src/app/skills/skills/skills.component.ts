import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillService } from '../skill.service';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule,SkillComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(public skillService:SkillService) { }

  ngOnInit(): void {
    this.skillService.getSkills();
  }

}