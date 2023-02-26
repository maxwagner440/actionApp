import {  
  Injectable  
} from '@angular/core';  
import {  
  HttpClient  } from '@angular/common/http';  
import {  
  CookieService  
} from 'ngx-cookie-service';  
@Injectable({  
  providedIn: 'root'  
})  
export class AuthService {  
  isloggedin = false;  
  localCookie;
  
  constructor(private http: HttpClient, private cookie: CookieService) {}

  checkLogValues(): boolean { 
      this.localCookie = this.cookie.get('cookie');  
      if (this.localCookie) {   
          return true;  
      } else {  
          return false;  
      }  
  }  
}  
export class User {  
  username: string;  
  password: string;  
}  