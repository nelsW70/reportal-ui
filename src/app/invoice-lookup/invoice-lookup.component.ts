import { Component, OnInit, HostListener } from '@angular/core';
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
    PONumber: '-',
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
    PONumber: '-',
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
    PONumber: '-',
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
    PONumber: '-',
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
    PONumber: '-',
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
    PONumber: '-',
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
    PONumber: '-',
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
    PONumber: '-',
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
    PONumber: '-UND',
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
  selector: 'app-invoice-lookup',
  templateUrl: './invoice-lookup.component.html',
  styleUrls: ['./invoice-lookup.component.scss'],
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
export class InvoiceLookupComponent implements OnInit {
  currentWindowWidth: number;
  currentIndex: number = null;

  // fake combobox values and auto-complete for demo
  searchTermOne = '';
  searchTermTwo = '';
  searchTermThree = '';
  searchTermFour = '';
  dropdownValues1 = ['a', 'b', 'c', 'd'];
  dropdownValues2 = ['a', 'b', 'c', 'd'];
  dropdownValues3 = ['a', 'b', 'c', 'd'];
  dropdownValues4 = ['a', 'b', 'c', 'd'];

  // fake values for semantic ui select
  selectedOption = [];
  options: Array<string> = ['one', 'two', 'three', 'four', 'five'];

  selectedOption2 = [];
  options2: Array<string> = ['one', 'two', 'three', 'four', 'five'];

  expandedData: any;
  displayedColumns = ['invoiceNumber', 'customerName', 'invoiceTotal'];
  dataSource = new MobileDataSource();

  isExpansionDetailRow = (i: number, row: object) =>
    row.hasOwnProperty('detailRow');

  constructor() {}

  ngOnInit() {
    this.currentWindowWidth = window.innerWidth;
  }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }
}
