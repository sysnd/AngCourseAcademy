import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersListComponent, UserDetailComponent, AddUserComponent, UsersComponent],
  imports: [
    
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }