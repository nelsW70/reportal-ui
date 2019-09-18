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
  jobName: string;
  currentBalance: string;
  levelOne: string;
  levelTwo: string;
  levelThree: string;
  levelFour: string;
  jobNumber: string;
  dso: string;
  pastDue: string;
  arBalance: string;
  creditLimit: string;
  remainingCredit: string;
  lastPaymentAmount: string;
  accountOpenDate: string;
  creditTerms: string;
}

const data: ProductInfo[] = [
  {
    jobName: 'Mickey Hotel',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    jobNumber: '3056058505000',
    dso: '$4,225.01',
    pastDue: '$4,225.01',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'NET 30'
  },
  {
    jobName: 'Mickey Hotel',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    jobNumber: '3056058505000',
    dso: '$4,225.01',
    pastDue: '$4,225.01',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'NET 30'
  },
  {
    jobName: 'Mickey Hotel',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    jobNumber: '3056058505000',
    dso: '$4,225.01',
    pastDue: '$4,225.01',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'NET 30'
  },
  {
    jobName: 'Mickey Hotel',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    jobNumber: '3056058505000',
    dso: '$4,225.01',
    pastDue: '$4,225.01',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'NET 30'
  },
  {
    jobName: 'Mickey Hotel',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    jobNumber: '3056058505000',
    dso: '$4,225.01',
    pastDue: '$4,225.01',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'NET 30'
  },
  {
    jobName: 'Mickey Hotel',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    jobNumber: '3056058505000',
    dso: '$4,225.01',
    pastDue: '$4,225.01',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'NET 30'
  },
  {
    jobName: 'Mickey Hotel',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    jobNumber: '3056058505000',
    dso: '$4,225.01',
    pastDue: '$4,225.01',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'NET 30'
  },
  {
    jobName: 'Mickey Hotel',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    jobNumber: '3056058505000',
    dso: '$4,225.01',
    pastDue: '$4,225.01',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'NET 30'
  },
  {
    jobName: 'Mickey Hotel',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    jobNumber: '3056058505000',
    dso: '$4,225.01',
    pastDue: '$4,225.01',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'DUE IMMEDIATELY'
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
  selector: 'app-customer-credit',
  templateUrl: './customer-credit.component.html',
  styleUrls: ['./customer-credit.component.scss'],
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
export class CustomerCreditComponent implements OnInit {
  currentWindowWidth: number;
  currentIndex: number = null;

  expandedData: any;
  displayedColumns = ['jobName', 'jobNumber', 'pastDue'];
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
