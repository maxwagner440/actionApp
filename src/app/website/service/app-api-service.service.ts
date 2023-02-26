import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AppApiServiceService {

  constructor(private http: HttpClient) { }
  //baseUrl = 'https://eric-action-app.herokuapp.com'
  baseUrl = ' http://127.0.0.1:5000'
  userUrl = '/user';
  taskUrl = "/task";
  voteUrl = "/vote";
  photoUrl = "/photos";
  //USER
  getAllUsers() {
    return this.http.get<User[]>(this.baseUrl+this.userUrl+"s");
  }

  activateUserTogglePost(authorized_user, user_email, active_toggle){
    console.log(authorized_user)
    return this.http.post<any>(this.baseUrl+'/user-status', {"authorized_email":authorized_user, "user_email":user_email,active:active_toggle ? 1 : 0});
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

  putTask(description,createdBy,if_failed) {
    return this.http.put<any>(this.baseUrl+this.taskUrl,  
      {"description":description, "created_by":createdBy, "if_failed":if_failed});
  }

  deleteTask(task_id, created_by) {
    return this.http.post<any>(this.baseUrl+this.taskUrl+'/delete/'+task_id,  
      {"created_by":created_by});
  }

  completeTask(task_id) {
    return this.http.post<any>(this.baseUrl+'/complete/'+task_id,{});
    }


  //USER
  getVote(vote_id) {
    return this.http.get<any>(this.baseUrl+this.voteUrl+"/"+vote_id);
  }

  getVotes() {
    return this.http.get<any>(this.baseUrl+this.voteUrl+"s");
  }

  putVote(username, task_id) {
    return this.http.put<any>(this.baseUrl+this.voteUrl, {"created_by":username, "task_id":task_id});
  }

  
  //PHOTOS
  postPhoto(file){
    console.log(file)
    return this.http.post<any>(this.baseUrl+this.photoUrl, file)
  }
  getPhotos(){
    return this.http.get<any>(this.baseUrl+this.photoUrl)
  }
}


