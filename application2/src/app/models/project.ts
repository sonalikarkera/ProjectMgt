import { Employee } from './employee';

export class Project {
     _id:string;
     projectId: number;
      name:string;
      projectDesc:string;
    startDate:Date;
      endDate:Date;
     stakeholders:string;
    githubLink:string;
    manager:Employee;
    constructor(
//        public  _id:string,
//    public projectId: number,
//     public name:string,
//     public projectDesc:string,
//     public startDate:Date,
//     public endDate:Date,
//     public stakeholders:string,
//     public githubLink:string,
//     public manager:Employee,
    ) { }
}