import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,RouterModule,
    MatSidenavModule,MatIconModule,
    MatButtonModule,MatListModule,

  ]
    ,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public themeService:ThemeService) { }

  ngOnInit(): void {
  }

}
