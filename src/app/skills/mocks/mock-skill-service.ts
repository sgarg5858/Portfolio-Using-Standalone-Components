import { BehaviorSubject, distinctUntilChanged, map } from "rxjs";
import { SkillState } from "../skill.service";
import { mockSkills } from "./mock-skills";

export class  MockSkillService{

    private  skillBehaviorSubject = new BehaviorSubject<SkillState>({loading:null,skills:null,error:null});
    
    public readonly skills$ = this.skillBehaviorSubject.asObservable().pipe(
        map(skillState=>skillState.skills),
        distinctUntilChanged()
    )
    public readonly loading$ = this.skillBehaviorSubject.asObservable().pipe(
        map(skillState=>skillState.loading),
        distinctUntilChanged()
    )
    public readonly error$ = this.skillBehaviorSubject.asObservable().pipe(
        map(skillState=>skillState.error),
        distinctUntilChanged()
    )
    public getSkills()
    {
      this.skillBehaviorSubject.next({loading:true,skills:null,error:null});
      setTimeout(()=>{
        this.skillBehaviorSubject
        .next({loading:false,skills:mockSkills,error:null});
      },2000);
    }
  }