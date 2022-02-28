import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor(private srvLogin: AuthService, private router: Router) { 
    if (!srvLogin.checkLogValues()) {  
      router.navigate(['/login',{ navMessage: "Please login" }]);  
    }
  }

  ngOnInit() {
  }

}
