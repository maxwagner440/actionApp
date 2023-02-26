import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppApiServiceService } from '../service/app-api-service.service';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.css']
})
export class PhotoViewComponent implements OnInit {

  photo_links=[]
  constructor(private apiService: AppApiServiceService, private srvLogin: AuthService, private router: Router,) {
    // if (!srvLogin.checkLogValues()) {  
    //   router.navigate(['/login', { navMessage: "Please login" }]);  
    // }
   }

  ngOnInit() {
    this.getAllPhotos()
  }

  getAllPhotos(){
    this.apiService.getPhotos().subscribe(data =>{
      this.photo_links = data
    })
  }
}
