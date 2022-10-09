import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public themeService:ThemeService) { }


  ngOnInit(): void {
  }

}
