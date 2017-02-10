import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskorder',
  templateUrl: './taskorder.component.html',
  styleUrls: ['./taskorder.component.css']
})
export class TaskorderComponent implements OnInit {
  pageTitle: string = 'Task Order'
  constructor() { }

  ngOnInit() {
  }

}
