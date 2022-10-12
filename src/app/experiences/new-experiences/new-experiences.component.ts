import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ExperienceComponent } from '../experience/experience.component';
import { MatCardModule } from '@angular/material/card';
import { CssClassPipe } from 'src/app/shared/css-class.pipe';
import { Employer } from '../employer';
@Component({
  selector: 'app-new-experiences',
  standalone: true,
  imports: [CommonModule,ExperienceComponent,MatCardModule,CssClassPipe],
  templateUrl: './new-experiences.component.html',
  styleUrls: ['./new-experiences.component.scss']
})
export class NewExperiencesComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute) { }
  employers:Employer[]=[];
  ngOnInit(): void {
    this.employers=this.activatedRoute.snapshot.data['employers'];
  }

}
