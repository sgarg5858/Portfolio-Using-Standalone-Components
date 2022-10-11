import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, delay, EMPTY, Observable, of } from 'rxjs';
import { Employer, ExperienceService } from './experience.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceResloverService implements Resolve<Employer[] |null> {

  constructor(
    private experienceService:ExperienceService,
    private snackbar:MatSnackBar
    ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Employer[] | Observable<Employer[]|null> | Promise<Employer[]> {
    let employers:Employer[]=this.experienceService.areEmployersCached;

    if(employers.length > 0)
    {
      return of(employers).pipe(delay(500));
    }
    else
    {
      return this.experienceService.getEmployersForResolver().pipe(
        catchError((err)=>{

          this.snackbar.open("Couldn't load Experiences",undefined,{
            horizontalPosition:'right',
            verticalPosition:'bottom',
            panelClass:'mySnackbar',
            duration:3000
          })

          return EMPTY;
        })
      )
    }
    
  }
}
