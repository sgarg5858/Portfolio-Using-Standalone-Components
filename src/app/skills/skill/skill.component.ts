import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'
import { Skill } from '../skill';
@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skill! :Skill;
  constructor() { }

  ngOnInit(): void {
  }

}
