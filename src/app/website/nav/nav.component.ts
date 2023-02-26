import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() username:string = null;
  showNav = false;

  constructor(private router: Router, private cookieService: CookieService,) { 
  }

  ngOnInit() {
    console.log(this.showNav)
    this.username = this.cookieService.get('username')
  }

  showNavigation() {
    console.log("hello")
    console.log(this.showNav)
    this.showNav = !this.showNav
  }
  routeToLink(link) {
    this.showNav = !this.showNav
    this.router.navigate(["/"+link]);
  }
  logout(): void {  
    this.cookieService.deleteAll();  
    this.username = this.cookieService.get('username')
    this.router.navigate(['/login',{ navMessage: "You have been logged out" }]);  
  }  


}
