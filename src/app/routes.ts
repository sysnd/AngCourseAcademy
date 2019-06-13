import { Routes } from '@angular/router';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';
import { NonAuthenticatedGuard } from './authentication/guards/non-authenticated.guard';
import { AuthenticatedGuard } from './authentication/guards/authenticated.guard';


export const routes: Routes = [
    {
        path: '',
        component: MasterLayoutComponent,
        children: [
            {
                path: 'users',
                loadChildren: './users/users.module#UsersModule',
                canLoad: [AuthenticatedGuard]
            },
            {
                path: 'courses',
                loadChildren: './courses/courses.module#CoursesModule'
            }
        ]
    },
    {
        path: 'auth',
        loadChildren: './authentication/authentication.module#AuthModule',
        canLoad: [NonAuthenticatedGuard]
    },
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    }
];
