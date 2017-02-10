import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-account',
  templateUrl: './invoice-account.component.html',
  styleUrls: ['./invoice-account.component.css']
})
export class InvoiceAccountComponent implements OnInit {
  settings = {
    columns: {
      invoice_num: {
        title: 'Invoice Account Number'
      },
      contract_num: {
        title: 'Contract Account Number'
      },
      customer_name: {
        title: 'Customer Name'
      }
    }
  };

  pageTitle: string = 'INVOICE ACCOUNT NUMBERS'
  constructor() { }

  ngOnInit() {
  }

}
