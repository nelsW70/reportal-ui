import { Component, OnInit } from '@angular/core';

export interface ProductInfo {
  itemId: string;
  itemDescription: string;
  currentPrice: string;
  priceSource: string;
  final: string;
  mgplPrice: string;
  matrixPrice: string;
}

const data: ProductInfo[] = [
  {
    itemId: '6-411/01',
    itemDescription: 'S-Hide INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    priceSource: 'GPQ',
    final: 'N',
    mgplPrice: '$18.85',
    matrixPrice: '$25.75'
  },
  {
    itemId: 'AK2LV-B/55',
    itemDescription: 'AMERLOCK 2 LV CUBE',
    currentPrice: '$18.85',
    priceSource: 'GPQ',
    final: '-',
    mgplPrice: '$18.85',
    matrixPrice: '$25.75'
  },
  {
    itemId: 'AK2-T1/01',
    itemDescription: 'AMERLOCK 2/400 DEEP TINT RESIN',
    currentPrice: '$18.85',
    priceSource: '-',
    final: 'Y',
    mgplPrice: '-',
    matrixPrice: '$25.75'
  },
  {
    itemId: '6-411/01',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    priceSource: 'GPQ',
    final: 'N',
    mgplPrice: '$18.85',
    matrixPrice: '$25.75'
  },
  {
    itemId: '6-411/01',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    priceSource: 'MGPL',
    final: 'N',
    mgplPrice: '$18.85',
    matrixPrice: '$25.75'
  },
  {
    itemId: '6-411/01',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: 'NOT FOUND',
    priceSource: 'GPQ',
    final: 'N',
    mgplPrice: 'NOT FOUND',
    matrixPrice: '$25.75'
  },
  {
    itemId: '6-411/01',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    priceSource: '-',
    final: '-',
    mgplPrice: '$18.85',
    matrixPrice: '$25.75'
  },
  {
    itemId: '6-411/01',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    priceSource: 'GPQ',
    final: 'Y',
    mgplPrice: '$18.85',
    matrixPrice: '$25.75'
  },
  {
    itemId: 'AK2LV-B/55',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    priceSource: 'GPQ',
    final: 'N',
    mgplPrice: '$18.85',
    matrixPrice: 'NOT FOUND'
  },
  {
    itemId: 'AK2LV-B/55',
    itemDescription: 'S-HIDE INT LX EGG WHPB 6-411 B100',
    currentPrice: '$18.85',
    priceSource: 'GPQ',
    final: 'N',
    mgplPrice: 'NOT FOUND',
    matrixPrice: '$25.75'
  }
];

@Component({
  selector: 'app-pricing-lookup-table-large',
  templateUrl: './pricing-lookup-table-large.component.html',
  styleUrls: ['./pricing-lookup-table-large.component.scss']
})
export class PricingLookupTableLargeComponent implements OnInit {
  displayedColumns = [
    'itemId',
    'itemDescription',
    'currentPrice',
    'priceSource',
    'final',
    'mgplPrice',
    'matrixPrice'
  ];
  dataSource = data;

  constructor() {}

  ngOnInit() {}
}
