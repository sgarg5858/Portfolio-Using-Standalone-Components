import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, retry, tap } from 'rxjs';
import { Skill } from './skill';

@Injectable()
export class NewSkillService {

  constructor(private httpClient:HttpClient) { }

  private cachedSkills:Skill[]=[];

  get areSkillsCached()
  {
    return this.cachedSkills;
  }

  public getSkillsForResolver()
  {
    return  this.httpClient.get<Skill[]>('../../assets/skills.json').pipe(
      delay(1000),
      retry({
        count:2,delay:1000
      }),
      tap({
        next:(skills)=>{
          //for cache!
          this.cachedSkills=skills;
        }
      })
    );
  }
}
