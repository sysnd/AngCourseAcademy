import { Routes } from '@angular/router';
 import { UsersListComponent } from './users/users-list/users-list.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';

export const routes: Routes = [
    {
        path: 'users',
        component: UsersListComponent
    },
    {
        path: "courses",
        component: CoursesListComponent
    }   
];
