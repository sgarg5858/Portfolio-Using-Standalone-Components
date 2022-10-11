import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Employer, ExperienceService } from './experience.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceResloverService implements Resolve<Employer[] |null> {

  constructor(private experienceService:ExperienceService,private router:Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Employer[] | Observable<Employer[]|null> | Promise<Employer[]> {
    let employers:Employer[]=this.experienceService.areEmployersCached;

    if(employers.length > 0)
    {
      return of(employers);
    }
    else
    {
      return this.experienceService.getEmployersForResolver().pipe(
        catchError((err)=>{
          this.router.navigate(['home']);
          return of(null);
        })
      )
    }
    
  }
}
