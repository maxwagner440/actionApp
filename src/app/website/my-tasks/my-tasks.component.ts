import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppApiServiceService } from '../service/app-api-service.service';
import { AuthService } from '../service/auth-service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Task } from '../models/task.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MyTasksComponent implements OnInit {
  taskForm: FormGroup

  tasks = [];
  username;
  name;
  displayedColumns: string[] = ['description'];
  expandedElement: Task | null
  showCreateTask = false;
  constructor(private srvLogin: AuthService, private router: Router, private cookieService: CookieService,  private apiService: AppApiServiceService) { 
    if (!srvLogin.checkLogValues()) {  
      router.navigate(['/login',{ navMessage: "Please login" }]);  
    }
  }

  ngOnInit() {
    this.defineForm()
    this.username = this.cookieService.get("username")
    this.name = this.cookieService.get("name")
    this.getTasksByUser()
  }

  showForm(){
    this.showCreateTask = !this.showCreateTask
  }

  getTasksByUser() {
    var newTasks = []
      this.apiService.getTasks().subscribe(data => {
        data.map((task) => {
          if(task.created_by == this.name){
            newTasks.push(task)
          }
        })
      })

    this.tasks = newTasks
  }

  deleteTask(task_id) {
    this.apiService.deleteTask(task_id, this.name).subscribe(data => {
      this.getTasksByUser()
    })
  }

  deleteRowData(obj){
    this.deleteTask(obj._id.$oid)
  }
  
  createTask() {
    if(this.taskForm.controls.description.value && this.taskForm.controls.ifFailed.value) {
      this.apiService.putTask(
        this.taskForm.controls.description.value,
        this.name,
        this.taskForm.controls.ifFailed.value).subscribe(data => {
          this.taskForm.reset()
          this.getTasksByUser()
        })
    } else {
      alert('Please fill out form completely')
    }
    
  }

  
  completeTask(task){
    console.log(task)
    this.apiService.completeTask(task._id.$oid).subscribe(data => {
      this.getTasksByUser()
    })
  }

  defineForm(){
    this.taskForm = new FormGroup({
      description: new FormControl('', Validators.required),
      ifFailed: new FormControl('', Validators.required),
    });
    
  }

}
