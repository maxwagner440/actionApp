import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppApiServiceService } from '../service/app-api-service.service';
import { AuthService } from '../service/auth-service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Task } from '../models/task.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-task',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AllTaskComponent implements OnInit {
  
  displayedColumnsTopTen: string[] = ['description']
  expandedElement: Task | null
  tasks = [];
  
  dataSource = new MatTableDataSource<Task>();
  username=this.cookieService.get('username')

  constructor(
    private cookieService: CookieService, private apiService: AppApiServiceService) {

  }


  ngOnInit() {
    this.getData()    
  }

  async getData(){
    this.tasks = []
    this.tasks = await this.getTasks()
    this.dataSource.data = this.tasks
   
  }

  getTasks() {
    return new Promise<[]>((resolve, reject) => {
      this.apiService.getTasks().subscribe(data => {
        resolve(data)
      })
    })
  }


}
