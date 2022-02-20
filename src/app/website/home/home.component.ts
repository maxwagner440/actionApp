import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: string){
    console.log(newItem)
  }
}


/*
TODO:
1. Overall setup of app and UI
2. Nav bar
3. 
*/