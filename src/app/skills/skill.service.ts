import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, delay, distinctUntilChanged, map, mergeMap, of, retry, skip, tap } from 'rxjs';


export interface Skill{
  name:string;
  experienceInYears:number;
}

export interface SkillState{
  loading:boolean|null;
  skills:Skill[]|null;
  error:unknown|null;
}

@Injectable()
export class SkillService {

  constructor(private httpClient:HttpClient) {
    
   }

  private skillsBehaviorSubject = new BehaviorSubject<SkillState>({loading:null,skills:null,error:null});

  public readonly skills$ = this.skillsBehaviorSubject.asObservable().pipe(
    map((skillState)=>skillState.skills),
    distinctUntilChanged(),

  );

  public readonly loading$ = this.skillsBehaviorSubject.asObservable().pipe(
    map((skillState)=>skillState.loading),
    distinctUntilChanged(),
  );

  public readonly error$ = this.skillsBehaviorSubject.asObservable().pipe(
    map((skillState)=>skillState.error),
    distinctUntilChanged(),
  );




  checkIfSkillsAlreadyLoaded()
  {
    const skills=this.skillsBehaviorSubject.value.skills;
    return skills && skills.length > 0 ? true : false;
  }
  getSkills()
  {
    if(this.checkIfSkillsAlreadyLoaded())
    {
      return;
    }
    //Sets the loading indicator
    this.skillsBehaviorSubject.next({
      loading:true,
      skills:null,
      error:null
    });
    // this.openSnackBar("Loading Skills ....");
    

    this.httpClient.get<Skill[]>('../../assets/skills.json').pipe(
      delay(1000),
      )
    .subscribe(
      {
        next : (skills)=>{
          console.log(skills);
          this.skillsBehaviorSubject.next(
            {
              loading:false,
              skills:skills,
              error:null
            }
          )
          // this.openSnackBar("Skills Loaded !");
    
        },
        error : (error)=>{
          this.skillsBehaviorSubject.next(
            {
              loading:false,
              skills:null,
              error:"Couldn't load skills!"
            }
          )
          // this.openSnackBar("Couldn't Load Skills !");
        }
      }
    )
  }

    // openSnackBar(message:string)
  // {
  //   this._snackbar.dismiss();
  //   this._snackbar.openFromComponent(SnackbarComponent,{
  //     data:message,
  //     duration:3000,
  //     horizontalPosition:"left",
  //     verticalPosition:"bottom",
  //     panelClass:'mat-primary'
  //   })
  // }

}
