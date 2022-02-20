import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { WebsiteRoutingModule } from "./website.routing.module";



@NgModule({
    imports: [
      CommonModule,
      WebsiteRoutingModule,
    ],
    declarations: [
      HomeComponent,
    ],
    providers: [  ]
  })

  export class WebsiteModule { }