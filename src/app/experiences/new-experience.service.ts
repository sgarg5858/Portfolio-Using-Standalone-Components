import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, retry, tap } from 'rxjs';
import { Employer } from './employer';

@Injectable({
  providedIn: 'root'
})
export class NewExperienceService {

  constructor(private httpClient:HttpClient) { }

  private cachedEmployer:Employer[]=[];

  get areEmployersCached()
  {
    return this.cachedEmployer;
  }


  getEmployersForResolver()
  {
    return this.httpClient.get<Employer[]>('../../assets/employers.json').pipe(
      delay(1000),
      retry({
        count:2,
        delay:1000
      }),
      tap({
        next:(employers)=>{
          //for cache!
          this.cachedEmployer=employers;
        }
      })
    )
  }
}
