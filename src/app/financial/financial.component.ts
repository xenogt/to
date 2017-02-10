import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {

  settings = {
    columns: {
      seq_key: {
        title: 'Financial Sequence Key'
      },
      pop: {
        title: 'Period of Performance'
      },
      startDate: {
        title: 'Begin Date'
      },
      endDate: {
        title: 'End Date'
      },
      funding: {
        title: 'Funding'
      },
      notes: {
        title: 'Notes'
      }
    },
    mode: 'external'
  };

  pageTitle: string = 'FINANCIALS';
  modalIsVisible: boolean = false;

  constructor() { }
  
  ngOnInit() {
  }
  
  openModal(data) {
    this.modalIsVisible = true;
  }

  closeModal() {
    this.modalIsVisible = false;
  }
}
