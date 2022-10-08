import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
  imports:[RouterModule,CommonModule,NavbarComponent]
})
export class AppComponent{
  title = 'portfolio-using-standalone-components';
  constructor(public themeService:ThemeService){}
}
