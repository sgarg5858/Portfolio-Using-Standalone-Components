import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home/home.component";

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'skills',
        loadComponent:()=>import('../skills/skills/skills.component').then(c=>c.SkillsComponent)
    },
    {
        path:'experience',
        loadComponent:()=>import('../experiences/experiences/experiences.component').then(c=>c.ExperiencesComponent)
    },
    {
        path:'**',
        redirectTo:'home',
        pathMatch:'full'
    }
];
