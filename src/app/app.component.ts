import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'actionApp';
  showNav = true
  username;

  constructor(private router: Router, private cookieService: CookieService){
  }

  ngOnInit(){
    const cookieUser = this.cookieService.get("username")
    console.log(cookieUser)
    if (cookieUser){
      this.username = cookieUser
      console.log(this.username)
    }
  }
  routeToLink(link) {
    this.showNav = !this.showNav
    this.router.navigate(["/"+link]);
  }

}
