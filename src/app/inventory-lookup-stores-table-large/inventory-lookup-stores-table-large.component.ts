import { Component, OnInit } from '@angular/core';
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
  itemNumber1: string;
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
    itemNumber1: '',
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
    itemNumber1: '',
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
    itemNumber1: '',
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
    itemNumber1: '',
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
    itemNumber1: '',
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
    itemNumber1: '',
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
    itemNumber1: '',
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
    itemNumber1: '',
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
    itemNumber1: '',
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

export class MobileDataSource extends DataSource<any> {
  connect(): Observable<ProductInfo[]> {
    const rows = [];
    data.forEach(product => rows.push(product, { detailRow: true, product }));
    return of(rows);
  }

  disconnect() {}
}

@Component({
  selector: 'app-inventory-lookup-stores-table-large',
  templateUrl: './inventory-lookup-stores-table-large.component.html',
  styleUrls: ['./inventory-lookup-stores-table-large.component.scss'],
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
export class InventoryLookupStoresTableLargeComponent implements OnInit {
  currentIndex: number = null;

  expandedData: any;
  displayedColumns = ['storeNumber', 'itemNumber1'];
  dataSource = new MobileDataSource();

  isExpansionDetailRow = (i: number, row: object) =>
    row.hasOwnProperty('detailRow');

  constructor() {}

  ngOnInit() {}
}
