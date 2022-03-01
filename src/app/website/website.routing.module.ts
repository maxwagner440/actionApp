import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { TaskComponent } from "./task/task.component";
import { MyTasksComponent } from "./my-tasks/my-tasks.component";

export const websiteRoutes: Routes = [
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'task', component: TaskComponent
    },
    {
      path: 'my-tasks', component: MyTasksComponent
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