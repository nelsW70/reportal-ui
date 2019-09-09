import { Component, OnInit } from '@angular/core';

export interface ProductInfo {
  invoiceNumber: string;
  SAPBranch: string;
  customerName: string;
  customerNumber: string;
  jobName: string;
  PONumber: string;
  customerJob: string;
  invoiceType: string;
  tenderType: string;
  invoiceTotal: string;
  invoiceDate: string;
}

const data: ProductInfo[] = [
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceTotal: '$56.50',
    invoiceDate: '05/28/2019'
  },
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceTotal: '$56.50',
    invoiceDate: '05/28/2019'
  },
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceTotal: '$56.50',
    invoiceDate: '05/28/2019'
  },
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceTotal: '$56.50',
    invoiceDate: '05/28/2019'
  },
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceTotal: '$56.50',
    invoiceDate: '05/28/2019'
  },
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceTotal: '$56.50',
    invoiceDate: '05/28/2019'
  },
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceTotal: '$56.50',
    invoiceDate: '05/28/2019'
  },
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceTotal: '$56.50',
    invoiceDate: '05/28/2019'
  },
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceTotal: '$56.50',
    invoiceDate: '05/28/2019'
  }
];

@Component({
  selector: 'app-invoice-lookup-table-xlarge',
  templateUrl: './invoice-lookup-table-xlarge.component.html',
  styleUrls: ['./invoice-lookup-table-xlarge.component.scss']
})
export class InvoiceLookupTableXlargeComponent implements OnInit {
  displayedColumns = [
    'invoiceNumber',
    'SAPBranch',
    'customerNumber',
    'customerName',
    'jobName',
    'PONumber',
    'customerJob',
    'invoiceType',
    'tenderType',
    'invoiceTotal',
    'invoiceDate'
  ];
  dataSource = data;

  constructor() {}

  ngOnInit() {}
}
