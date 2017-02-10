import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-awarded',
  templateUrl: './service-awarded.component.html',
  styleUrls: ['./service-awarded.component.css']
})
export class ServiceAwardedComponent implements OnInit {
  settings = {
    columns: {
      seq_key: {
        title: 'Service Sequence Key'
      },
      svc: {
        title: 'EIS Services'
      },
      clin: {
        title: 'Specific CLINs'
      },
      jurisdiction: {
        title: 'Specific Jurisdiction'
      },
      loc: {
        title: 'Specific Location'
      },
      kpi: {
        title: 'Specific KPIs/SLAs'
      }
    }
  };

  pageTitle: string = 'SERVICE AWARDED | Does the task order requires us to limit scope per service?'
  constructor() { }

  ngOnInit() {
  }

}
