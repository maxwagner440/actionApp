import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteModule } from './website/website.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatIconModule, MatListModule, MatSidenavModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { CookieService } from 'ngx-cookie-service';
import { TaskComponent } from './website/task/task.component';
import { VoteComponent } from './website/vote/vote.component';
import { NavComponent } from './website/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebsiteModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
