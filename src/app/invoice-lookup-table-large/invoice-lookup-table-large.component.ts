import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export interface ProductInfo {
  invoiceNumber: string;
  SAPBranch: string;
  customerName: string;
  customerNumber: string;
  jobName: string;
  invoiceTotal: string;
  PONumber: string;
  customerJob: string;
  invoiceType: string;
  tenderType: string;
  invoiceDate: string;
}

const data: ProductInfo[] = [
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    invoiceTotal: '$56.50',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  },
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    invoiceTotal: '$56.50',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  },
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    invoiceTotal: '$56.50',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  },
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    invoiceTotal: '$56.50',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  },
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    invoiceTotal: '$56.50',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  },
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    invoiceTotal: '$56.50',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  },
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    invoiceTotal: '$56.50',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  },
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    invoiceTotal: '$56.50',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  },
  {
    invoiceNumber: '910102101125',
    SAPBranch: '0',
    customerName: 'Sally Baker',
    customerNumber: '300437700000',
    jobName: 'Sally Baker',
    invoiceTotal: '$56.50',
    PONumber: '12345678901234567890',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  }
];

export class MobileDataSource extends DataSource<any> {
  connect(): Observable<ProductInfo[]> {
    const rows = [];
    data.forEach(product => rows.push(product, { detailRow: true, product }));
    return of(rows);
  }

  disconnect() {}
}

@Component({
  selector: 'app-invoice-lookup-table-large',
  templateUrl: './invoice-lookup-table-large.component.html',
  styleUrls: ['./invoice-lookup-table-large.component.scss'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', visibility: 'hidden' })
      ),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class InvoiceLookupTableLargeComponent implements OnInit {
  currentIndex: number = null;

  expandedData: any;
  displayedColumns = [
    'invoiceNumber',
    'customerName',
    'jobName',
    'PONumber',
    'invoiceTotal',
    'invoiceDate'
  ];
  dataSource = new MobileDataSource();

  isExpansionDetailRow = (i: number, row: object) =>
    row.hasOwnProperty('detailRow');

  constructor() {}

  ngOnInit() {}
}
