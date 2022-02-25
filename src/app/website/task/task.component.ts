import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppApiServiceService } from '../service/app-api-service.service';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskForm: FormGroup

  tasks;
  constructor(private srvLogin: AuthService, private router: Router, private cookieService: CookieService, private apiService: AppApiServiceService) {
    if (!srvLogin.checkLogValues()) {  
      router.navigate(['/login']);  
    }
  }

  ngOnInit() {
    this.defineForm()
    this.getTasks()
  }

  createTask() {
    this.apiService.putTask(
      this.taskForm.controls.description.value,
      this.cookieService.get('username'),
      this.taskForm.controls.reward.value,
      this.taskForm.controls.ifFailed.value).subscribe(data => {
        console.log(data)
      })
  }

  getTasks() {
    this.apiService.getTasks().subscribe(data => {
      console.log(data)
      console.log(data.length)
      this.tasks=data
    })
  }

  deleteTask(task_id) {
    this.apiService.deleteTask(task_id, this.cookieService.get('username')).subscribe(data => {
      console.log(data)
      console.log(data.length)
      this.tasks=data
    })
  }

  defineForm(){
    this.taskForm = new FormGroup({
      description: new FormControl('', Validators.required),
      ifFailed: new FormControl('', Validators.required),
      reward: new FormControl('', Validators.required),
    });
    
  }

}
