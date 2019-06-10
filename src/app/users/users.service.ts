import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import UserInterface from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  users: Array<UserInterface> = [
    { name: 'Angela Downey', email: 'angela.downey@mail.com', password: 'angpass123'},
    { name: 'Robert Fisher', email: 'robert.fisher@mail.com', password: 'robcho70'},
    { name: 'Michael Brighton', email: 'mike.bright@mail.com', password: 'mickeyM'},
    { name: 'Angela Downey', email: 'angela.downey@mail.com', password: 'angpass123'},
    { name: 'Robert Fisher', email: 'robert.fisher@mail.com', password: 'robcho70'},
    { name: 'Michael Brighton', email: 'mike.bright@mail.com', password: 'mickeyM'},
    { name: 'Angela Downey', email: 'angela.downey@mail.com', password: 'angpass123'},
    { name: 'Robert Fisher', email: 'robert.fisher@mail.com', password: 'robcho70'}
  ];

  getAllUsers(){
    return of(this.users);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/users/' + id);
  }

  addNewUser(user: UserInterface): Observable<any> {
    if (user.id) {
      return this.http.put(`http://localhost:3000/users/${user.id}`, user)
    }
    return this.http.post('http://localhost:3000/users', user)
  }

  getById(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`http://localhost:3000/users/${id}`);
  }
}
