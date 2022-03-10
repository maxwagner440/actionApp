import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user.model';
import { AppApiServiceService } from '../service/app-api-service.service';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminPortalComponent implements OnInit {

  username;
  allUsers:User[] = [];
  displayedColumns: string[] = ['email', "name"];
  expandedElement: User | null;
  dataSource = new MatTableDataSource<User>();
  isToggled= false
  constructor(private srvLogin: AuthService, private router: Router,
    private cookieService: CookieService, private apiService: AppApiServiceService,) { 
    if (!srvLogin.checkLogValues()) {  
      router.navigate(['/login',{ navMessage: "Please login" }]);  
    }
  }

  ngOnInit() {
    this.username = this.cookieService.get("username")
    if(this.username !== "maxwagner440@gmail.com"){
      this.router.navigate(['/home']);
    }
    this.getAllUsers()
  }

  getAllUsers(){
    this.apiService.getAllUsers().subscribe(data =>{
      this.dataSource.data = data
    })
  }
  
  // toggleButton(user){
  //   if(!this.isToggled){
  //     this.activate(user);
  //   }else{
  //     this.deactivate(user);
  //   }
  //   this.isToggled = !this.isToggled;
  // }

  activate(user){
    this.toggleApiCall(user, true)

  }

  deactivate(user){
    this.toggleApiCall(user, false)
  } 

  toggleApiCall(user, active_bool){
    this.apiService.activateUserTogglePost(this.username, user.email, active_bool).subscribe(data =>{
      console.log(data)
      this.getAllUsers()
    })
  }
}
