import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
user:string;
  constructor() { }

  ngOnInit() {
    this.user=window.localStorage.getItem('token');
    console.log(this.user);
    this.user=sessionStorage.getItem('username');
    console.log(this.user);
  }
  

}
