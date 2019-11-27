import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: any[];
  constructor(db: AngularFireDatabaseModule) {
    db.list("/courses").subscribe(response=> {
      this.courses = response.json();
      console.log();

    })
  }

  ngOnInit() {
  }

}
