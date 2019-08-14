import { Component, OnInit } from '@angular/core';

export interface ProductInfo {
  proXtraId: string;
  company: string;
  fullName: string;
  address: string;
  email: string;
  phoneNumber: string;
  signUpDate: string;
  storesPurchasedFrom: string;
  status: string;
}

const data: ProductInfo[] = [
  {
    proXtraId: '6-411/01',
    company: 'S-Hide INT LX EGG WHPB 6-411 B100',
    fullName: '$18.85',
    address: 'GPQ',
    email: 'N',
    phoneNumber: '$18.85',
    signUpDate: '$25.75',
    storesPurchasedFrom: '',
    status: ''
  },
  {
    proXtraId: 'AK2LV-B/55',
    company: 'AMERLOCK 2 LV CUBE',
    fullName: '$18.85',
    address: 'GPQ',
    email: '-',
    phoneNumber: '$18.85',
    signUpDate: '$25.75',
    storesPurchasedFrom: '',
    status: ''
  },
  {
    proXtraId: 'AK2-T1/01',
    company: 'AMERLOCK 2/400 DEEP TINT RESIN',
    fullName: '$18.85',
    address: '-',
    email: 'Y',
    phoneNumber: '-',
    signUpDate: '$25.75',
    storesPurchasedFrom: '',
    status: ''
  },
  {
    proXtraId: '6-411/01',
    company: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    fullName: '$18.85',
    address: 'GPQ',
    email: 'N',
    phoneNumber: '$18.85',
    signUpDate: '$25.75',
    storesPurchasedFrom: '',
    status: ''
  },
  {
    proXtraId: '6-411/01',
    company: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    fullName: '$18.85',
    address: 'MGPL',
    email: 'N',
    phoneNumber: '$18.85',
    signUpDate: '$25.75',
    storesPurchasedFrom: '',
    status: ''
  },
  {
    proXtraId: '6-411/01',
    company: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    fullName: 'NOT FOUND',
    address: 'GPQ',
    email: 'N',
    phoneNumber: 'NOT FOUND',
    signUpDate: '$25.75',
    storesPurchasedFrom: '',
    status: ''
  },
  {
    proXtraId: '6-411/01',
    company: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    fullName: '$18.85',
    address: '-',
    email: '-',
    phoneNumber: '$18.85',
    signUpDate: '$25.75',
    storesPurchasedFrom: '',
    status: ''
  },
  {
    proXtraId: '6-411/01',
    company: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    fullName: '$18.85',
    address: 'GPQ',
    email: 'Y',
    phoneNumber: '$18.85',
    signUpDate: '$25.75',
    storesPurchasedFrom: '',
    status: ''
  },
  {
    proXtraId: 'AK2LV-B/55',
    company: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    fullName: '$18.85',
    address: 'GPQ',
    email: 'N',
    phoneNumber: '$18.85',
    signUpDate: 'NOT FOUND',
    storesPurchasedFrom: '',
    status: ''
  },
  {
    proXtraId: 'AK2LV-B/55',
    company: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    fullName: '$18.85',
    address: 'GPQ',
    email: 'N',
    phoneNumber: 'NOT FOUND',
    signUpDate: '$25.75',
    storesPurchasedFrom: '',
    status: ''
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
