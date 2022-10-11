import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { filter, Observable, take } from 'rxjs';
import { Skill, SkillService } from './skill.service';

@Injectable()
export class SkillsResloverService implements Resolve<Skill[]> {

  constructor(private skillService:SkillService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Skill[]>  {
    
    this.skillService.getSkills();
     let obs:Observable<Skill[]>= this.skillService.skills$.pipe(
      filter((skills)=> skills!=null),
    ) as Observable<Skill[]>;

    //The returned Observable should be resolved
    return obs.pipe(take(1));
  }
}
