import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NameFormComponent } from "./name-form/name-form.component";
import { TaskComponent } from "./task/task.component";
import { VoteComponent } from "./vote/vote.component";

export const websiteRoutes: Routes = [
    {
      path: 'login', component: NameFormComponent
    },
    {
      path: 'task', component: TaskComponent
    },
    {
      path: 'vote', component: VoteComponent
    },
    {
        path: '**', component: HomeComponent
    },
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(websiteRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class WebsiteRoutingModule { }