import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { WebsiteRoutingModule } from "./website.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatCardModule, MatDialogModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatSidenavModule, MatTableModule, MatToolbarModule } from "@angular/material";
import { CookieService } from "ngx-cookie-service";
import { LoginComponent } from "./login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavComponent } from "./nav/nav.component";
import { TaskComponent } from "./task/task.component";
import { VoteComponent } from "./vote/vote.component";



@NgModule({
    imports: [
      CommonModule,
      WebsiteRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatButtonModule,
      MatIconModule,
      MatGridListModule,
      MatTableModule,
      MatDialogModule,
      BrowserAnimationsModule,
      MatProgressSpinnerModule,
      MatCardModule,
      MatMenuModule,
    ],
    declarations: [
      HomeComponent,
      LoginComponent,
      NavComponent,
      TaskComponent,
      VoteComponent,
    ],
    providers: [ CookieService ]
  })

  export class WebsiteModule { }