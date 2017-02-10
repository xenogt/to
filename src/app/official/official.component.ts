import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-official',
  templateUrl: './official.component.html',
  styleUrls: ['./official.component.css']
})
export class OfficialComponent implements OnInit {

  settings = {
    columns: {
      seq_key: {
        title: 'Officials Sequence Key'
      },
      email: {
        title: 'Work Email Address'
      },
      first: {
        title: 'First Name'
      },
      last: {
        title: 'Last Name'
      },
      wphone: {
        title: 'Work Phone'
      },
      mphone: {
        title: 'Mobile Phone'
      },
      role: {
        title: 'Role'
      },
      startDate: {
        title: 'Start Date'
      },
      endDate: {
        title: 'End Date'
      },
      dpaFlag: {
        title: 'DPA Flag'
      }
    },
    mode: 'external'
  };

  pageTitle: string = 'OFFICIALS'
  constructor() { }

  ngOnInit() {
  }
  create(data){
    console.log('in create');
    console.log(data);
  }
}
