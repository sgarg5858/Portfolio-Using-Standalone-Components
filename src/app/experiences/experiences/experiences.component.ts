import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../experience.service';
import { ExperienceComponent } from '../experience/experience.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule,ExperienceComponent,MatCardModule],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor(public experienceService:ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.getEmployers();
  }

}
