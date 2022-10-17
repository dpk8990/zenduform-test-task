import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Inside submissions component!");
  }

  toggleVal: string = "map";
  listData: any = [
    {
    workFlow: "Requires Location",
    status: "Uncomplete",
    from: "denisgordiyenya@gmail.com",
    to: "denisgordiyenya@gmail.com",
    dueDate: "06 December"
  },
  {
    workFlow: "Requires Location",
    status: "Low Risk",
    from: "denisgordiyenya@gmail.com",
    to: "denisgordiyenya@gmail.com",
    dueDate: "06 December"
  },
  {
    workFlow: "Requires Location",
    status: "Uncomplete",
    from: "denisgordiyenya@gmail.com",
    to: "denisgordiyenya@gmail.com",
    dueDate: "06 December"
  },
  {
    workFlow: "Requires Location",
    status: "Needs Review",
    from: "denisgordiyenya@gmail.com",
    to: "denisgordiyenya@gmail.com",
    dueDate: "06 December"
  },
];

  toggleButton(type: string){
    this.toggleVal = type;
  }

}
