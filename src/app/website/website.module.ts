import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { WebsiteRoutingModule } from "./website.routing.module";
import { NameFormComponent } from './name-form/name-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatGridListModule } from "@angular/material";
import { CookieService } from "ngx-cookie-service";
import { LoginComponent } from "./login/login.component";



@NgModule({
    imports: [
      CommonModule,
      WebsiteRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      MatGridListModule,
    ],
    declarations: [
      HomeComponent,
      NameFormComponent,
      LoginComponent,
    ],
    providers: [ CookieService ]
  })

  export class WebsiteModule { }