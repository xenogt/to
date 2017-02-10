import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  
  settings = {
    columns: {
      seq_key: {
        title: 'Location Sequence Key'
      },
      nsc: {
        title: 'Network Site Code'
      },
      address: {
        title: 'Address'
      },
      city: {
        title: 'City'
      },
      state: {
        title: 'State'
      },
      zip: {
        title: 'ZIP'
      }
    }
  };

  pageTitle: string = 'LOCATIONS'
  constructor() { }

  ngOnInit() {
  }

}
