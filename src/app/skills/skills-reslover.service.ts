import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { delay, filter, map, merge, Observable, of, skip, take, tap, throwError } from 'rxjs';
import { Skill, SkillService } from './skill.service';

@Injectable()
export class SkillsResloverService implements Resolve<any> {

  constructor
  (private skillService:SkillService,
    private router:Router
    ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Skill[] |null> {
    //take(1) is imp as our observable should complete
    if(this.skillService.checkIfSkillsAlreadyLoaded())
    {
      console.log("Cache");
      return this.skillService.skills$;
    }
    else
    {

      this.skillService.getSkills();
      //Why skip(1)?
      // As soon as we call the getSkills function it 
      // emits a value though it emits null so distinctUntilChanged will not allow it
      // as the initial value is also null thats why we use skip(1)
     return this.skillService.skills$.pipe(tap((skills)=>{
      console.log(skills);
      if(skills === null)
      {
        this.router.navigate(['home']);
      }
     }));

    }
  }
}
