import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { routes } from './routes';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [CourseDetailComponent, CoursesListComponent, CoursesComponent, AddCourseComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ] 
})
export class CoursesModule { }
