import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppApiServiceService } from '../service/app-api-service.service';
import { AuthService } from '../service/auth-service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Task } from '../models/task.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TaskComponent implements OnInit {
  taskForm: FormGroup
  displayedColumns: string[] = ['description','created_by'];
  displayedColumnsTopTen: string[] = ['description', 'votes']
  expandedElement: Task | null
  tasks = [];
  votes = [];
  tasksWithVotes =[] 
  dataSource = new MatTableDataSource<Task>();
  username=this.cookieService.get('username')
  constructor(
    private srvLogin: AuthService, private router: Router, 
    private cookieService: CookieService, private apiService: AppApiServiceService, private changeDetectorRefs: ChangeDetectorRef) {
    if (!srvLogin.checkLogValues()) {  
      router.navigate(['/login', { navMessage: "Please login" }]);  
    }
  }

  ngOnInit() {
    this.defineForm()
    this.getData()    
  }

  async getData(){
    this.tasks = []
    this.tasks = await this.getTasks()
    this.votes = []
    this.votes = await this.getVotes()
    this.aggregateVotesWithTasks()
  }

  // createTask() {
  //   this.apiService.putTask(
  //     this.taskForm.controls.description.value,
  //     this.username,
  //     this.taskForm.controls.reward.value,
  //     this.taskForm.controls.ifFailed.value).subscribe(data => {
  //       this.taskForm.reset()
  //       this.getData()
  //     })
  // }

  getTasks() {
    return new Promise<[]>((resolve, reject) => {
      this.apiService.getTasks().subscribe(data => {
        // console.log(data)
        // console.log(data.length)
        resolve(data)
      })
    })
  }

  getVotes(){
    return new Promise<[]>((resolve, reject) => {
      this.apiService.getVotes().subscribe(data => {
        //console.log(data)
        resolve(data)
      })
    })
  }

  aggregateVotesWithTasks(){
    var newData = []
    this.tasks.map((task) => {
      var matchingVote = this.votes[task._id.$oid]
      newData.push({
        ...task,
        votes:matchingVote ? matchingVote : 0
      })
      
    })
    this.dataSource.data = newData;
  }

  voteRow(obj) {
    console.log(obj._id.$oid)
    this.apiService.putVote(this.username, obj._id.$oid).subscribe(data => {
      // console.log(data)
      this.getData()
    })
  }

  // deleteTask(task_id) {
  //   this.apiService.deleteTask(task_id, this.username).subscribe(data => {
  //     console.log(data)
  //     this.getData()
  //   })
  // }

  // deleteRowData(obj){
  //   console.log(obj._id.$oid)
  //   this.deleteTask(obj._id.$oid)
  // }

  defineForm(){
    this.taskForm = new FormGroup({
      description: new FormControl('', Validators.required),
      ifFailed: new FormControl('', Validators.required),
      reward: new FormControl('', Validators.required),
    });
    
  }

}
