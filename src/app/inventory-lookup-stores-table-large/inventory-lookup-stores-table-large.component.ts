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
  itemNumber2: string;
  itemNumber3: string;
  itemNumber4: string;
  itemNumber5: string;
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
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeNumber: 'PPG Paints 8089',
    address1: '920 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    itemCount: '2536',
    phoneNumber: '(805) 485-9556',
    distance: '0.02 miles'
  },
  {
    itemNumber1: '',
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
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
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeNumber: 'PPG Paints 8089',
    address1: '922 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    itemCount: '3652',
    phoneNumber: '(805) 485-9556',
    distance: '0.02 miles'
  },
  {
    itemNumber1: '',
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeNumber: 'PPG Paints 8089',
    address1: '923 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    itemCount: '0',
    phoneNumber: '(805) 485-9556',
    distance: '0.02 miles'
  },
  {
    itemNumber1: '',
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeNumber: 'PPG Paints 8089',
    address1: '924 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    itemCount: '0',
    phoneNumber: '(805) 485-9556',
    distance: '0.02 miles'
  },
  {
    itemNumber1: '',
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeNumber: 'PPG Paints 8089',
    address1: '925 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    itemCount: '3544',
    phoneNumber: '(805) 485-9556',
    distance: '0.02 miles'
  },
  {
    itemNumber1: '',
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeNumber: 'PPG Paints 8089',
    address1: '926 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    itemCount: '0',
    phoneNumber: '(805) 485-9556',
    distance: '0.02 miles'
  },
  {
    itemNumber1: '',
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeNumber: 'PPG Paints 8089',
    address1: '927 East Ventura Blvd.',
    address2: 'Oxnard',
    address3: 'CA',
    address4: '93036',
    itemCount: '2312',
    phoneNumber: '(805) 485-9556',
    distance: '0.02 miles'
  },
  {
    itemNumber1: '',
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeNumber: 'PPG Paints 8089',
    address1: '928 East Ventura Blvd.',
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
  displayedColumns = [
    'storeNumber',
    'itemNumber1',
    'itemNumber2',
    'itemNumber3',
    'itemNumber4',
    'itemNumber5'
  ];
  dataSource = new MobileDataSource();

  isExpansionDetailRow = (i: number, row: object) =>
    row.hasOwnProperty('detailRow');

  constructor() {}

  ngOnInit() {}
}
