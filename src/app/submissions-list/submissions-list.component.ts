import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissions-list',
  templateUrl: './submissions-list.component.html',
  styleUrls: ['./submissions-list.component.scss']
})
export class SubmissionsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Inside submissions-list component!")
  }
  
  @Input() cardData: any;

}
