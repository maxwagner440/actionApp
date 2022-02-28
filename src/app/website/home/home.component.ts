import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private srvLogin: AuthService, private router: Router) { 
    if (!srvLogin.checkLogValues()) {  
      router.navigate(['/login',{ navMessage: "Please login" }]);  
    }
  }

  ngOnInit() {
  }

  addItem(newItem: string){
    console.log(newItem)
  }
}
