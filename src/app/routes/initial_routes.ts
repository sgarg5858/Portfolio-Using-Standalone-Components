import { Routes } from "@angular/router";
import { ExperienceService } from "../experiences/experience.service";
import { HomeComponent } from "../home/home/home.component";
import { SkillService } from "../skills/skill.service";

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent,
        title:"Sanjay Garg"
    },
    {
        path:'skills',
        loadComponent:()=>import('../skills/skills/skills.component').then(c=>c.SkillsComponent),
        providers:[SkillService],
        title:"Sanjay Garg-Skills"
    },
    {
        path:'experience',
        loadComponent:()=>import('../experiences/experiences/experiences.component').then(c=>c.ExperiencesComponent),
        providers:[ExperienceService],
        title:"Sanjay Garg-Experience"
    },
    {
        path:'**',
        redirectTo:'home',
        pathMatch:'full'
    }
];
