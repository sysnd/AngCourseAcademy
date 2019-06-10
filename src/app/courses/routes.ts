import { Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesComponent } from './courses.component';

export const routes: Routes = [
    {
        path: '',
        component: CoursesComponent,
        children:[
            {
                path: 'list',
                component: CoursesListComponent
            },
            {
                path: 'add-course',
                component: AddCourseComponent
            },
            {
                path: 'add-course/:id',
                component: AddCourseComponent
            }
        ]
    }
];