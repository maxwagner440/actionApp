import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppApiServiceService } from '../service/app-api-service.service';
import { AuthService } from '../service/auth-service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Task } from '../models/task.model';

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
  expandedElement: Task | null
  tasks = [];
  votes = [];
  tasksWithVotes = []
  username=this.cookieService.get('username')
  constructor(
    private srvLogin: AuthService, private router: Router, 
    private cookieService: CookieService, private apiService: AppApiServiceService) {
    if (!srvLogin.checkLogValues()) {  
      router.navigate(['/login']);  
    }
  }

  ngOnInit() {
    this.defineForm()
    this.getTasks()
    this.getVotes()
    this.aggregateVotesWithTasks()
  }

  createTask() {
    this.apiService.putTask(
      this.taskForm.controls.description.value,
      this.username,
      this.taskForm.controls.reward.value,
      this.taskForm.controls.ifFailed.value).subscribe(data => {
        this.taskForm.reset()
        this.getTasks()
      })
  }

  getTasks() {
    this.apiService.getTasks().subscribe(data => {
      console.log(data)
      console.log(data.length)
      this.tasks=data
    })
  }

  getVotes(){
    this.apiService.getVotes().subscribe(data => {
      console.log(data)
      this.votes=data
    })
  }

  aggregateVotesWithTasks(){
    this.tasksWithVotes = []
    console.log(this.tasks)
    this.tasks.map((task) => {
      var matchingVote = this.votes[task._id.$oid]
      // Object.keys(this.votes).forEach(key => arrayVal.push(myData[key]));
      console.log(task)
      console.log(matchingVote)
      // if(matching_task)
      // this.tasksWithVotes.push({
      //   ...matching_task,
      //   votes:vote
      // })
    })

  }

  deleteTask(task_id) {
    this.apiService.deleteTask(task_id, this.username).subscribe(data => {
      console.log(data)
      this.getTasks()
    })
  }

  deleteRowData(obj){
    console.log(obj._id.$oid)
    this.deleteTask(obj._id.$oid)
  }

  defineForm(){
    this.taskForm = new FormGroup({
      description: new FormControl('', Validators.required),
      ifFailed: new FormControl('', Validators.required),
      reward: new FormControl('', Validators.required),
    });
    
  }

}
