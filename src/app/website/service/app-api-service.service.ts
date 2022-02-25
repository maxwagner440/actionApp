import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class AppApiServiceService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://eric-action-app.herokuapp.com'
  //baseUrl = ' http://127.0.0.1:5000'
  userUrl = '/user';
  taskUrl = "/task";
  voteUrl = "/vote";

  //USER
  getUser() {
    return this.http.get<User>(this.baseUrl+this.userUrl+"/6217eb6d5eacf615cf83ebd8");
  }

  putUser(name,email,password) {

    return this.http.put<any>(this.baseUrl+this.userUrl, 
      {"name":name,"email":email, "password":password});
  }

  postUser(email,password) {
    return this.http.post<any>(this.baseUrl+this.userUrl, {"email":email, "password":password});
  }

  //TASK
  getTask(task_id) {
    return this.http.get<any>(this.baseUrl+this.taskUrl+"/"+task_id);
  }

  getTasks() {
    return this.http.get<any>(this.baseUrl+this.taskUrl+"s");
  }

  putTask(description,createdBy,reward,if_failed) {
    //TODO: Add reward to API
    return this.http.put<any>(this.baseUrl+this.taskUrl,  
      {"description":description, "created_by":createdBy, "if_failed":if_failed, "reward":reward});
  }

  deleteTask(task_id, created_by) {
    return this.http.post<any>(this.baseUrl+this.taskUrl+'/delete/'+task_id,  
      {"created_by":created_by});
  }

  // postTask(body) {
  //   return this.http.post<any>(this.baseUrl+this.taskUrl, body);
  // }

  //USER
  getVote(vote_id) {
    return this.http.get<any>(this.baseUrl+this.voteUrl+"/"+vote_id);
  }

  getVotes() {
    return this.http.get<any>(this.baseUrl+this.voteUrl+"s");
  }

  putVote(body) {
    return this.http.put<any>(this.baseUrl+this.voteUrl, body);
  }

  // postVote(body) {
  //   return this.http.post<any>(this.baseUrl+this.voteUrl, body);
  // }
}


