import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, distinctUntilChanged, map } from 'rxjs';


export interface Project{
  name:string;
  description?:string;
  roles:string[];
  skills:string[]

}
export interface Employer{
  name:string;
  title:string;
  startDate:string;
  endDate:string;
  present:boolean;
  work:string;
}

export interface EmployerState{
  employers:Employer[]|null;
  loading:boolean|null;
  error:unknown|null;
}

@Injectable()
export class ExperienceService {

  // openSnackBar(message:string)
  // {
  //   this._snackbar.dismiss();
  //   this._snackbar.openFromComponent(SnackbarComponent,{
  //     data:message,
  //     duration:3000,
  //     horizontalPosition:"left",
  //     verticalPosition:"bottom"
  //   })
  // }

  constructor(private httpClient:HttpClient) { }

  private employersBehaviorSubject = new BehaviorSubject<EmployerState>({employers:null,loading:null,error:null});

  public readonly employersState$ = this.employersBehaviorSubject.asObservable();

  public readonly loading$ = this.employersState$.pipe(
    map((employersState)=>employersState.loading),
    distinctUntilChanged()
    );

  public readonly employers$ = this.employersState$.pipe(
    map((employersState)=>employersState.employers),
    distinctUntilChanged()
    );

  public readonly error$ = this.employersState$.pipe(
    map((employersState)=>employersState.error),
    distinctUntilChanged()
    );

  getEmployers(){

    console.log("Get Employers")
    //Set the loading state!
    this.employersBehaviorSubject.next({...this.employersBehaviorSubject.value,loading:true,error:null})

    // this.openSnackBar("Loading Experiences ....");

    this.httpClient.get<Employer[]>('../../assets/employers.json')
    .pipe(delay(500))
    .subscribe({
      next:(employers:Employer[])=>{

        this.employersBehaviorSubject.next({
          loading:false,
          employers:employers,
          error:null
        })
      },
      error:(error:any)=>{
        console.log(error);
        this.employersBehaviorSubject.next({
          loading:false,
          employers:null,
          error:error
        });
      }
    })

  }
}
