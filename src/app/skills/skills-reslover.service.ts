import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, delay, filter, map, merge, Observable, of, retry, skip, take, tap, throwError } from 'rxjs';
import { Skill, SkillService } from './skill.service';

@Injectable()
export class SkillsResloverService implements Resolve<any> {

  constructor
  (private skillService:SkillService,
    private router:Router
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
          this.router.navigate(['home']);
          return of(null);
        })
      )
    }
    
  }
}
