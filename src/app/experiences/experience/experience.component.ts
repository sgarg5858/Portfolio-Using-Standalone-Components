import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Employer } from '../employer';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() employer!:Employer;
  constructor() { }

  ngOnInit(): void {
  }

}
