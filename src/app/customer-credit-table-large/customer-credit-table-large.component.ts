import { Component, OnInit } from '@angular/core';
export interface ProductInfo {
  jobName: string;
  jobNumber: string;
  pastDue: string;
  currentBalance: string;
  levelOne: string;
  levelTwo: string;
  levelThree: string;
  levelFour: string;
  dso: string;
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
    jobNumber: '3056058505000',
    pastDue: '$4,225.01',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    dso: '$0.00',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'NET 30'
  },
  {
    jobName: 'Mickey Hotel',
    jobNumber: '3056058505000',
    pastDue: '$4,225.01',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    dso: '$0.00',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'NET 30'
  },
  {
    jobName: 'Mickey Hotel',
    jobNumber: '3056058505000',
    pastDue: '$4,225.01',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    dso: '$0.00',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'NET 30'
  },
  {
    jobName: 'Mickey Hotel',
    jobNumber: '3056058505000',
    pastDue: '$4,225.01',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    dso: '$0.00',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'NET 30'
  },
  {
    jobName: 'Mickey Hotel',
    jobNumber: '3056058505000',
    pastDue: '$4,225.01',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    dso: '$0.00',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'NET 30'
  },
  {
    jobName: 'Mickey Hotel',
    jobNumber: '3056058505000',
    pastDue: '$4,225.01',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    dso: '$0.00',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'NET 30'
  },
  {
    jobName: 'Mickey Hotel',
    jobNumber: '3056058505000',
    pastDue: '$4,225.01',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    dso: '$0.00',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'NET 30'
  },
  {
    jobName: 'Mickey Hotel',
    jobNumber: '3056058505000',
    pastDue: '$4,225.01',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    dso: '$0.00',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'NET 30'
  },
  {
    jobName: 'Mickey Hotel',
    jobNumber: '3056058505000',
    pastDue: '$4,225.01',
    currentBalance: '$1,685.00',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01',
    dso: '$0.00',
    arBalance: '$4,225.01',
    creditLimit: '$50,000.00',
    remainingCredit: '$50,225.01',
    lastPaymentAmount: '$4,225.01',
    accountOpenDate: '05/05/2018',
    creditTerms: 'DUE IMMEDIATELY'
  }
];

@Component({
  selector: 'app-customer-credit-table-large',
  templateUrl: './customer-credit-table-large.component.html',
  styleUrls: ['./customer-credit-table-large.component.scss']
})
export class CustomerCreditTableLargeComponent implements OnInit {
  displayedColumns = [
    'jobName',
    'jobNumber',
    'pastDue',
    'currentBalance',
    'levelOne',
    'levelTwo',
    'levelThree',
    'levelFour',
    'dso',
    'arBalance',
    'creditLimit',
    'remainingCredit',
    'lastPaymentAmount',
    'accountOpenDate',
    'creditTerms'
  ];
  dataSource = data;

  constructor() {}

  ngOnInit() {}
}
