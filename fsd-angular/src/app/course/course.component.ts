import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-course',
  template:` <p>{{ someProperty }}</p>`
  ,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  someProperty;
  constructor(private courseService: CourseService) { 
    
  }
 
  ngOnInit() {

    this.someProperty = this.courseService.getCourses();
  }

}
