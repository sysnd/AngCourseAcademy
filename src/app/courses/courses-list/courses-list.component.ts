import { Component, OnInit } from '@angular/core';
import CourseInterface from '../models/course.model';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: CourseInterface[] = [];

  constructor(private coursesService: CoursesService,
              private router: Router,
              private authService:AuthenticationService) { }

  ngOnInit() {
    this.coursesService.getAllCourses().subscribe((courses) => {
      console.log(courses);
      this.courses = courses;
    });
  }

  onCourseDeleted(id: number): void {
    this.coursesService.deleteCourse(id).subscribe(() => {
      this.courses = this.courses.filter(t => t.id !== id);
    });
  }

  onCourseAdd(): void {
    this.router.navigateByUrl('courses/add-course');
  }
  isAdmin():boolean{
   return this.authService.isAdmin();
  }
}
