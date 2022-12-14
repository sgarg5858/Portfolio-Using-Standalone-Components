import { importProvidersFrom } from "@angular/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { Routes } from "@angular/router";
import { ExperienceResloverService } from "../experiences/experience-reslover.service";
import { ExperienceService } from "../experiences/experience.service";
import { NewExperienceService } from "../experiences/new-experience.service";
import { HomeComponent } from "../home/home/home.component";
import { NewSkillService } from "../skills/new-skill.service";
import { SkillService } from "../skills/skill.service";
import { SkillsResloverService } from "../skills/skills-reslover.service";

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent,
        title:"Sanjay Garg"
    },
    // {
    //     path:'skills',
    //     loadComponent:()=>import('../skills/new-skills/new-skills.component').then(c=>c.NewSkillsComponent),
    //     providers:[
    //         NewSkillService,
    //         SkillsResloverService,
    //         importProvidersFrom(MatSnackBarModule)
    //     ],
    //     resolve:{skills:SkillsResloverService},
    //     title:"Sanjay Garg-Skills"
    // },
    {
        path:'skills',
        loadComponent:()=>import('../skills/skills/skills.component').then(c=>c.SkillsComponent),
        providers:[
            SkillService,
            importProvidersFrom(MatSnackBarModule)
        ],
        title:"Sanjay Garg-Skills"
    },
    {
        path:'experience',
        loadComponent:()=>import('../experiences/new-experiences/new-experiences.component').then(c=>c.NewExperiencesComponent),
        providers:[
            NewExperienceService,
            ExperienceResloverService,
            importProvidersFrom(MatSnackBarModule)
        ],
        resolve:{employers:ExperienceResloverService},
        title:"Sanjay Garg-Experience"
    },
    {
        path:'**',
        redirectTo:'home',
        pathMatch:'full'
    }
];
