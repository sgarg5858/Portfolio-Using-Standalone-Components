import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Employer } from './experience.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceResloverService implements Resolve<Employer[]> {

  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Employer[] | Observable<Employer[]> | Promise<Employer[]> {
    throw new Error('Method not implemented.');
  }
}
