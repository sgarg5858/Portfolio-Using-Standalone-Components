import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Skill } from '../skill.service';
import { SkillComponent } from '../skill/skill.component';
import { CssClassPipe } from 'src/app/shared/css-class.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-skills',
  standalone: true,
  imports: [CommonModule,SkillComponent,CssClassPipe,MatSnackBarModule],
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.scss']
})
export class NewSkillsComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute) { }
  skills:Skill[]=[];
  ngOnInit(): void {
    this.skills=this.activatedRoute.snapshot.data['skills'];
  }
}
