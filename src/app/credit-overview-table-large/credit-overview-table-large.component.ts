import { Component, OnInit } from '@angular/core';

export interface ProductInfo {
  companyName: string;
  customerNumber: string;
  totalCreditLimit: string;
  totalRemainingCredit: string;
  pastDueTotal: string;
  totalCurrentBalance: string;
  status: string;
}

const data: ProductInfo[] = [
  {
    companyName: 'Walt Disney World ALL STAR RESORT-TRAVISAVAN',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'open'
  },
  {
    companyName: 'Wausau Equipment Co, INC',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'approaching'
  },
  {
    companyName: 'Hyatt Place',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'over'
  },
  {
    companyName: 'Alfreda Gallardo',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'locked'
  },
  {
    companyName: 'DDG Construction',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'open'
  },
  {
    companyName: 'Telecom Products, INC.',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'open'
  },
  {
    companyName: 'Ron Swanson Builders',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'approaching'
  },
  {
    companyName: 'Wausau Equipment Co, INC.',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'over'
  },
  {
    companyName: 'Lakeside Painting',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: '$4,225.01',
    totalCurrentBalance: '$1,685.00',
    status: 'open'
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
    'totalCurrentBalance'
  ];
  dataSource = data;

  constructor() {}

  ngOnInit() {}
}
