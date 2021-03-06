import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users.component';

export const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {
                path: 'list',
                component: UsersListComponent
            },
            {
                path: 'add',
                component: AddUserComponent
            }, 
            {
                path: 'add/:id',
                component: AddUserComponent
            }
        ]
    }
];
