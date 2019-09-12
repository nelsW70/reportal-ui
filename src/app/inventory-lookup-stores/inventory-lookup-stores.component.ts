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
  storeNumber: string;
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  someNumber: string;
  PONumber: string;
  customerJob: string;
  invoiceType: string;
  tenderType: string;
  invoiceDate: string;
}

const data: ProductInfo[] = [
  {
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    someNumber: '2536',
    PONumber: '-',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  },
  {
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    someNumber: '2536',
    PONumber: '-',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  },
  {
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    someNumber: '2536',
    PONumber: '-',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  },
  {
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    someNumber: '2536',
    PONumber: '-',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  },
  {
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    someNumber: '2536',
    PONumber: '-',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  },
  {
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    someNumber: '2536',
    PONumber: '-',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  },
  {
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    someNumber: '2536',
    PONumber: '-',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  },
  {
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    someNumber: '2536',
    PONumber: '-',
    customerJob: '-',
    invoiceType: 'Sale',
    tenderType: 'Check',
    invoiceDate: '05/28/2019'
  },
  {
    storeNumber: 'PPG Paints 8089',
    address1: '921 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    someNumber: '2536',
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
  selector: 'app-inventory-lookup-stores',
  templateUrl: './inventory-lookup-stores.component.html',
  styleUrls: ['./inventory-lookup-stores.component.scss'],
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
export class InventoryLookupStoresComponent implements OnInit {
  currentWindowWidth: number;
  currentIndex: number = null;

  expandedData: any;
  displayedColumns = ['storeNumber', 'someNumber'];
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
