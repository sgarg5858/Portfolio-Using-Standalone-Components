import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, delay, EMPTY, filter, map, merge, Observable, of, retry, skip, take, tap, throwError } from 'rxjs';
import { NewSkillService } from './new-skill.service';
import { Skill, SkillService } from './skill.service';

@Injectable()
export class SkillsResloverService implements Resolve<any> {

  constructor
  (private skillService:NewSkillService,
    private _snackbar:MatSnackBar
    ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Skill[] |null> {
    //take(1) is imp as our observable should complete

    let skills:Skill[]=this.skillService.areSkillsCached;
    if(skills.length > 0)
    {
      return of(skills).pipe(delay(500));
    }
    else
    {
      return this.skillService.getSkillsForResolver().pipe(
        catchError((err)=>{
          this._snackbar.open("Couldn't load skills",undefined,{
            horizontalPosition:'right',
            verticalPosition:'bottom',
            panelClass:'mySnackbar',
            duration:3000
          })
          // this.router.navigate(['home']);
          return EMPTY;
        })
      )
    }
    
  }
}
