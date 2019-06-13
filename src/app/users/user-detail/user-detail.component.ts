import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import UserInterface from '../models/user.model';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: UserInterface;
  @Output() onDelete: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
  }
  
  onDeleteClicked() {
    this.onDelete.emit(this.user.id);
  }

  onUserEdit() {
    this.router.navigate(['users/add', this.user.id]);
  }
  isAdmin():boolean{
    return this.authService.isAdmin();
  }
}
