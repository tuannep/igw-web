import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router  } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public router: Router,
    public authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
        // logged in so return true
        //return true;
        const roleName = currentUser.roleName;
        console.log(JSON.stringify(route.data.role));

        if (route.data.role && route.data.role.indexOf(roleName) === -1) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    return false;
  }
  
}
