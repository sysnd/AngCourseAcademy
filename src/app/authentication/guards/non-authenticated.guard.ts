import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NonAuthenticatedGuard implements CanLoad {
  
  constructor(private authSevice: AuthenticationService,
    private router: Router) {

}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      if (this.authSevice.isLoggedIn()) {
        this.router.navigateByUrl('users/list');
      }
      
    return true;
  }
}
