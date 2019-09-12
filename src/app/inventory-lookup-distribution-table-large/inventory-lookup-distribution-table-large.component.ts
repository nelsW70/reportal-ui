import { Component, OnInit } from '@angular/core';

export interface ProductInfo {
  itemNumber1: string;
  itemNumber2: string;
  itemNumber3: string;
  itemNumber4: string;
  itemNumber5: string;
  storeName: string;
  itemCount: string;
}

const data: ProductInfo[] = [
  {
    itemNumber1: '',
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeName: 'Riverside',
    itemCount: '2536'
  },
  {
    itemNumber1: '',
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeName: 'Reading',
    itemCount: '0'
  },
  {
    itemNumber1: '',
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeName: 'Oakwood',
    itemCount: '3652'
  },
  {
    itemNumber1: '',
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeName: 'McCarran',
    itemCount: '0'
  },
  {
    itemNumber1: '',
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeName: 'Lewisville',
    itemCount: '0'
  },
  {
    itemNumber1: '',
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeName: 'Aurora',
    itemCount: '3544'
  },
  {
    itemNumber1: '',
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeName: 'Houston',
    itemCount: '0'
  },
  {
    itemNumber1: '',
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeName: 'Fairburn',
    itemCount: '2312'
  },
  {
    itemNumber1: '',
    itemNumber2: '',
    itemNumber3: '',
    itemNumber4: '',
    itemNumber5: '',
    storeName: 'Flower Mound',
    itemCount: '7496'
  }
];

@Component({
  selector: 'app-inventory-lookup-distribution-table-large',
  templateUrl: './inventory-lookup-distribution-table-large.component.html',
  styleUrls: ['./inventory-lookup-distribution-table-large.component.scss']
})
export class InventoryLookupDistributionTableLargeComponent implements OnInit {
  displayedColumns = [
    'storeName',
    'itemNumber1',
    'itemNumber2',
    'itemNumber3',
    'itemNumber4',
    'itemNumber5'
  ];
  dataSource = data;

  constructor() {}

  ngOnInit() {}
}
