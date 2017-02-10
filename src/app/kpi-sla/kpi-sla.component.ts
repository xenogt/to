import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpi-sla',
  templateUrl: './kpi-sla.component.html',
  styleUrls: ['./kpi-sla.component.css']
})
export class KpiSlaComponent implements OnInit {

  settings = {
    columns: {
      seq_key: {
        title: 'KPI Sequence Key'
      },
      kpi_measure_desc: {
        title: 'KPI/SLA Description'
      },
      kpi_unit_code: {
        title: 'KPI Unit Code'
      },
      loc_qualifier: {
        title: 'LOcation Qualifier'
      },
      svc_lvl_qualifier: {
        title: 'Service Level Qualifer'
      },
      aql_operator: {
        title: 'AQL Operator'
      },
      perf_standard: {
        title: 'Performance Standard'
      },
      measurement_unit: {
        title: 'Measurement Unit'
      }
    }
  };

  pageTitle: string = 'KPIs/SLAs - Per Task Order'
  constructor() { }

  ngOnInit() {
  }

}
