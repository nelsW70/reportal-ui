import { Component, OnInit } from '@angular/core';

export interface ProductInfo {
  companyName: string;
  customerNumber: string;
  totalCreditLimit: string;
  totalRemainingCredit: string;
  pastDueTotal: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  phoneNumber: string;
  signUpDate: string;
  storesPurchasedFrom: string;
  status: string;
}

const data: ProductInfo[] = [
  {
    companyName: 'COMPANY',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: 'ADDRESS 2',
    city: 'CITY',
    state: 'STATE',
    zip: 'ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'created'
  },
  {
    companyName: 'COMPANY',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: 'ADDRESS 2',
    city: 'CITY',
    state: 'STATE',
    zip: 'ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'created'
  },
  {
    companyName: 'COMPANY',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: 'ADDRESS 2',
    city: 'CITY',
    state: 'STATE',
    zip: 'ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'created'
  },
  {
    companyName: 'COMPANY',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: 'ADDRESS 2',
    city: 'CITY',
    state: 'STATE',
    zip: 'ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'pending'
  },
  {
    companyName: 'COMPANY',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: 'ADDRESS 2',
    city: 'CITY',
    state: 'STATE',
    zip: 'ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'none'
  },
  {
    companyName: 'COMPANY',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: 'ADDRESS 2',
    city: 'CITY',
    state: 'STATE',
    zip: 'ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'none'
  },
  {
    companyName: 'COMPANY',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: 'ADDRESS 2',
    city: 'CITY',
    state: 'STATE',
    zip: 'ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'none'
  },
  {
    companyName: 'COMPANY',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: 'ADDRESS 2',
    city: 'CITY',
    state: 'STATE',
    zip: 'ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYY',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'none'
  },
  {
    companyName: 'COMPANY',
    customerNumber: '3056058505000',
    totalCreditLimit: '$50,000.00',
    totalRemainingCredit: '$50,225.01',
    pastDueTotal: 'ADDRESS 2',
    city: 'CITY',
    state: 'STATE',
    zip: 'ZIP',
    email: 'FIRSTNAME.LASTNAME@EMAIL.COM',
    phoneNumber: '(555) 555-5555',
    signUpDate: 'MM/DD/YYYYUND',
    storesPurchasedFrom: '001, 002, 003, 004',
    status: 'none'
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
    'signUpDate',
    'storesPurchasedFrom',
    'status'
  ];
  dataSource = data;

  constructor() {}

  ngOnInit() {}
}
