import { Routes } from '@angular/router';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';


export const routes: Routes = [
    {
        path: '',
        component: MasterLayoutComponent,
        children: [
            {
                path: 'users',
                loadChildren: './users/users.module#UsersModule'
            },
            {
                path: 'courses',
                loadChildren: './courses/courses.module#CoursesModule'
            }
        ]
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
        },
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    }
];
