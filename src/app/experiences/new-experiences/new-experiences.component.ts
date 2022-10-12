import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-experiences.component.html',
  styleUrls: ['./new-experiences.component.scss']
})
export class NewExperiencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
