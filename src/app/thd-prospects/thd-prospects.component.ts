import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thd-prospects',
  templateUrl: './thd-prospects.component.html',
  styleUrls: ['./thd-prospects.component.scss']
})
export class ThdProspectsComponent implements OnInit {
  // fake combobox values and auto-complete for demo
  searchTermOne = '';
  searchTermTwo = '';
  dropdownValues1 = ['a', 'b', 'c', 'd'];
  dropdownValues2 = ['a', 'b', 'c', 'd'];

  constructor() {}

  ngOnInit() {}
}
