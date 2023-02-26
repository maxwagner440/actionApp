import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { TaskComponent } from "./task/task.component";
import { MyTasksComponent } from "./my-tasks/my-tasks.component";
import { PhotoUploadComponent } from "./photo-upload/photo-upload.component";
import { PhotoViewComponent } from "./photo-view/photo-view.component";
import { AllTaskComponent } from "./all-tasks/all-tasks.component";
import { AdminPortalComponent } from "./admin-portal/admin-portal.component";
import { AuthenticationGuard } from "../utilities/authGuard";

export const websiteRoutes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {path:'',  canActivate:[AuthenticationGuard], children: [
    {
      path: 'all-tasks', component: AllTaskComponent
    },
    {
      path: 'task', component: TaskComponent
    },
    {
      path: 'my-tasks', component: MyTasksComponent
    },
    {
      path: 'upload-photo', component: PhotoUploadComponent
    },
    {
      path: 'view-photos', component: PhotoViewComponent
    },
    {
      path: 'admin-portal', component: AdminPortalComponent
    },
    {
        path: '**', component: HomeComponent
    },
  ]}
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