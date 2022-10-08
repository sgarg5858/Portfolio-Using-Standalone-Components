import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  private darkModeSubject = new BehaviorSubject<boolean>(false);
  public readonly isDarkMode$ = this.darkModeSubject.asObservable();

  setTheme(isDarkMode:boolean)
  {
    console.log(isDarkMode)
    this.darkModeSubject.next(isDarkMode);
  }
}
