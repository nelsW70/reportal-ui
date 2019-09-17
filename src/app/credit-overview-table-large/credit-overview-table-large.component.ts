import { Component, OnInit } from '@angular/core';

export interface ProductInfo {
  companyName: string;
  customerNumber: string;
  totalCreditLimit: string;
  totalRemainingCredit: string;
  pastDueTotal: string;
  totalCurrentBalance: string;
  status: string;
  levelOne: string;
  levelTwo: string;
  levelThree: string;
  levelFour: string;
}

const data: ProductInfo[] = [
  {
    companyName: 'Walt Disney World ALL STAR RESORT-TRAVISAVAN',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'open',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01'
  },
  {
    companyName: 'Wausau Equipment Co, INC',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'approaching',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01'
  },
  {
    companyName: 'Hyatt Place',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'over',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01'
  },
  {
    companyName: 'Alfreda Gallardo',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'locked',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01'
  },
  {
    companyName: 'DDG Construction',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'open',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01'
  },
  {
    companyName: 'Telecom Products, INC.',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'open',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01'
  },
  {
    companyName: 'Ron Swanson Builders',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'approaching',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01'
  },
  {
    companyName: 'Wausau Equipment Co, INC.',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'over',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01'
  },
  {
    companyName: 'Lakeside Painting',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'open',
    levelOne: '$4,225.01',
    levelTwo: '$4,225.01',
    levelThree: '$4,225.01',
    levelFour: '$4,225.01'
  }
];

@Component({
  selector: 'app-credit-overview-table-large',
  templateUrl: './credit-overview-table-large.component.html',
  styleUrls: ['./credit-overview-table-large.component.scss']
})
export class CreditOverviewTableLargeComponent implements OnInit {
  displayedColumns = [
    'companyName',
    'customerNumber',
    'totalCreditLimit',
    'totalRemainingCredit',
    'pastDueTotal',
    'totalCurrentBalance',
    'levelOne',
    'levelTwo',
    'levelThree',
    'levelFour'
  ];
  dataSource = data;

  constructor() {}

  ngOnInit() {}
}
