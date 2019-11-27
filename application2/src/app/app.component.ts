import { Component } from '@angular/core';
import {User } from './user';
import {UserserviceService} from './userservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Management';
  user: User;

  constructor(private userService: UserserviceService)
  {
    this.user = new User();
  }

  onSubmit()
  {
    this.userService.sendMail(this.user).subscribe(data=>
      {
        console.log("Mail sent");
      })
  }


}
