import { Component, OnInit } from '@angular/core';

export interface ProductInfo {
  proXtraId: string;
  company: string;
  fullName: string;
  address: string;
  addressOne: string;
  addressTwo: string;
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
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: '',
    addressOne: 'ADDRESS 1',
    addressTwo: 'ADDRESS 2',
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
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: '',
    addressOne: 'ADDRESS 1',
    addressTwo: 'ADDRESS 2',
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
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: '',
    addressOne: 'ADDRESS 1',
    addressTwo: 'ADDRESS 2',
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
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: '',
    addressOne: 'ADDRESS 1',
    addressTwo: 'ADDRESS 2',
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
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: '',
    addressOne: 'ADDRESS 1',
    addressTwo: 'ADDRESS 2',
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
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: '',
    addressOne: 'ADDRESS 1',
    addressTwo: 'ADDRESS 2',
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
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: '',
    addressOne: 'ADDRESS 1',
    addressTwo: 'ADDRESS 2',
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
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: '',
    addressOne: 'ADDRESS 1',
    addressTwo: 'ADDRESS 2',
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
    proXtraId: '1234567',
    company: 'COMPANY',
    fullName: 'LAST NAME, FIRST NAME',
    address: '',
    addressOne: 'ADDRESS 1',
    addressTwo: 'ADDRESS 2',
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
  selector: 'app-thd-prospects-table-large',
  templateUrl: './thd-prospects-table-large.component.html',
  styleUrls: ['./thd-prospects-table-large.component.scss']
})
export class ThdProspectsTableLargeComponent implements OnInit {
  displayedColumns = [
    'proXtraId',
    'company',
    'fullName',
    'address',
    'email',
    'phoneNumber',
    'signUpDate',
    'storesPurchasedFrom',
    'status'
  ];
  dataSource = data;

  constructor() {}

  ngOnInit() {}
}
