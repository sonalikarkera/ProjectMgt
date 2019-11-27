import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  emps: any[];
  savemps:any[];
  private geturl = "http://b8java14.iiht.tech:9143/api/emplist";
  private saveurl="http://b8java14.iiht.tech:9143/api/empSave";
  constructor(private http: Http) {
    http.get(this.geturl)
      .subscribe(response => {
        console.log(response);
        this.emps = response.json();
      })
    http.get(this.saveurl)
    .subscribe(response=>{
    this.savemps=response.json();
    })
  

  }
  ngOnInit() {
  }

}

