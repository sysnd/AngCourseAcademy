import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';
import UserInterface from '../users/models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    constructor(private http: HttpClient,
      private usersService: UsersService,
      private router: Router) {

  }

  public isLoggedIn(): boolean {
  return !!sessionStorage.getItem('loggedUser');
  }

  public getLoggedUser(): UserInterface {
  return JSON.parse(sessionStorage.getItem('loggedUser'));
  }

  public login(email: string, password: string): Observable<UserInterface> {
  return new Observable((observer) => {
  this.usersService.getAllUsers()
  .subscribe((allUsers) => {
      const user = allUsers
      .find(u => u.email === email && u.password === password);

      if (user) {
          sessionStorage.setItem('loggedUser', JSON.stringify(user))
          observer.next(user);
          observer.complete();
      } else {
          observer.error("Incorrect email/password!");
      }
  });
  });        
  }

  public logout(): void {
    sessionStorage.removeItem('loggedUser');
    this.router.navigateByUrl('courses/list');
  }

  public isAdmin():boolean {
    debugger;
    if(this.getLoggedUser()){
      return this.getLoggedUser().isAdmin;
    }
    else{
      return false;
    }
  }
}
