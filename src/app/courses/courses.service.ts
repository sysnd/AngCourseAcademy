import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import CourseInterface from './models/course.model';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<CourseInterface[]> {
    return this.http.get<CourseInterface[]>('http://localhost:3000/courses');
  }
  deleteCourse(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/courses/' + id);
  }

  addCourse(course: CourseInterface): Observable<any> {
    if (course.id) {
      return this.http.put(`http://localhost:3000/courses/${course.id}`, course)
    }
    return this.http.post('http://localhost:3000/courses', course)
  }

  getById(id: number): Observable<CourseInterface> {
    return this.http.get<CourseInterface>(`http://localhost:3000/courses/${id}`);
  }
  attendCourse(course: CourseInterface) : Observable<any>{
    return this.http.put(`http://localhost:3000/tasks/${course.id}`, course);
  }
}
