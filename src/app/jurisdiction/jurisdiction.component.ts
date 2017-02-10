import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jurisdiction',
  templateUrl: './jurisdiction.component.html',
  styleUrls: ['./jurisdiction.component.css']
})
export class JurisdictionComponent implements OnInit {

  settings = {
    columns: {
      seq_key: {
        title: 'Jurisdiction Sequence Key'
      },
      jurisdictionID: {
        title: 'Jurisdiction ID'
      },
      jurisdictionName: {
        title: 'Jurisdiction Name'
      }
    }
  };

  pageTitle: string = 'JURISDICTIONS'
  constructor() { }

  ngOnInit() {
  }

}
