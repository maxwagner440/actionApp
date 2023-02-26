import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor (
        private router : Router,
        private cookieService: CookieService
    ) { }

    /**
     * Check if the user is logged in before calling http
     *
     * @param route
     * @param state
     * @returns {boolean}
     */
    canActivate (
        route : ActivatedRouteSnapshot,
        state : RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const cookie = this.cookieService.get('cookie');  
        //TODO: Maybe more logic around being signed in?
        if(cookie){
            return true;
        }
        this.router.navigate(['/login', { navMessage: "Something went wrong" }],{ queryParams: { returnUrl: state.url }});
        return;
    }
}