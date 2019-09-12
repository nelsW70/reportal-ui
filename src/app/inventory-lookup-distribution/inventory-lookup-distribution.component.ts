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
  itemNumber: string;
  storeNumber: string;
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  itemCount: string;
  phoneNumber: string;
  distance: string;
}

const data: ProductInfo[] = [
  {
    itemNumber: '',
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    itemCount: '2536',
    phoneNumber: '(805) 485-9556',
    distance: '0.02 miles'
  },
  {
    itemNumber: '',
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    itemCount: '0',
    phoneNumber: '(805) 485-9556',
    distance: '0.02 miles'
  },
  {
    itemNumber: '',
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    itemCount: '3652',
    phoneNumber: '(805) 485-9556',
    distance: '0.02 miles'
  },
  {
    itemNumber: '',
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    itemCount: '0',
    phoneNumber: '(805) 485-9556',
    distance: '0.02 miles'
  },
  {
    itemNumber: '',
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    itemCount: '0',
    phoneNumber: '(805) 485-9556',
    distance: '0.02 miles'
  },
  {
    itemNumber: '',
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    itemCount: '3544',
    phoneNumber: '(805) 485-9556',
    distance: '0.02 miles'
  },
  {
    itemNumber: '',
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    itemCount: '0',
    phoneNumber: '(805) 485-9556',
    distance: '0.02 miles'
  },
  {
    itemNumber: '',
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    itemCount: '2312',
    phoneNumber: '(805) 485-9556',
    distance: '0.02 miles'
  },
  {
    itemNumber: '',
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    itemCount: '7496',
    phoneNumber: '(805) 485-9556',
    distance: '0.02 miles'
  }
];

@Component({
  selector: 'app-inventory-lookup-distribution',
  templateUrl: './inventory-lookup-distribution.component.html',
  styleUrls: ['./inventory-lookup-distribution.component.scss']
})
export class InventoryLookupDistributionComponent implements OnInit {
  currentWindowWidth: number;
  currentIndex: number = null;

  displayedColumns = ['storeNumber', 'itemNumber'];
  dataSource = data;

  constructor() {}

  ngOnInit() {
    this.currentWindowWidth = window.innerWidth;
  }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }
}
