import { Component, OnInit } from '@angular/core';
import { AppApiServiceService } from '../service/app-api-service.service';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.css']
})
export class PhotoViewComponent implements OnInit {

  photo_links=[]
  constructor(private apiService: AppApiServiceService) { }

  ngOnInit() {
    this.getAllPhotos()
  }

  getAllPhotos(){
    this.apiService.getPhotos().subscribe(data =>{
      this.photo_links = data
    })
  }
}
