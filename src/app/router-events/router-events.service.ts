import { Injectable } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, filter, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterEventsService {

  private loadingRouterSubject = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this.loadingRouterSubject.asObservable();

  constructor(private router:Router) {
    this.router.events.pipe(
      filter((event) => 
      event instanceof NavigationStart ||
      event instanceof NavigationEnd ||
      event instanceof NavigationCancel
      ),
      tap((event)=>{
        if(event instanceof NavigationStart)
        {
          this.loadingRouterSubject.next(true);
        }
        else if (event instanceof NavigationEnd || event instanceof NavigationCancel)
        {
          this.loadingRouterSubject.next(false);

          if(event instanceof NavigationCancel)
          {
            //show Snackbar here!
          }
        }
      })
    ).subscribe(console.log)
   }

}
