import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employer, ExperienceService } from '../experience.service';
import { ExperienceComponent } from '../experience/experience.component';
import { MatCardModule } from '@angular/material/card';
import { CssClassPipe } from 'src/app/shared/css-class.pipe';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule,ExperienceComponent,MatCardModule,CssClassPipe],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute) { }
  employers:Employer[]=[];
  ngOnInit(): void {
    this.employers=this.activatedRoute.snapshot.data['employers'];
    // this.experienceService.getEmployers();
  }
  // getAnimateClass(index:number)
  // {
  //   return `experience-animate-${index}`
  // }

}
