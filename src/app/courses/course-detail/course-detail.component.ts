import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import AttendeeInterface from '../models/attendee.model';
import CourseInterface from '../models/course.model';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input() course: CourseInterface;
  @Output() onDelete = new EventEmitter();

  isLoggedIn: boolean = false;

  constructor(private coursesService: CoursesService,
              private authService: AuthenticationService,
              private router: Router) { 

                this.isLoggedIn = this.authService.isLoggedIn();
              }

  ngOnInit() {
  }

  onAttendClick() {
    const userId = this.authService.getLoggedUser().id;
    if (this.course.attendees.findIndex(u => u.id === userId) !== -1) 
      return;
    
      const attendee: AttendeeInterface = {
        name: this.authService.getLoggedUser().name,
        id: userId
      };
    this.course.attendees.push(attendee);

    this.coursesService.attendCourse(this.course).subscribe(() => {
      console.log('SUCCESS ATTEND');
    });
  }

  onDeleteClick(): void {
    this.onDelete.emit(this.course.id);
  }

  onEditClick(): void {
    this.router.navigate(['courses/add-course', this.course.id]);
  }

  get canAttend(): boolean {
   const user = this.authService.getLoggedUser();

   if(!user) 
    return false;

    const userId = user.id;

    return this.course.attendees.findIndex(u => u.id === userId) === -1;
  }
  isAdmin():boolean{
    return this.authService.isAdmin();
  }
}
