import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FundamentalNgxModule } from 'fundamental-ngx';
import { TableCdkExampleComponent } from './table-cdk-example/table-cdk-example.component';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { PricingLookupComponent } from './pricing-lookup/pricing-lookup.component';

@NgModule({
  declarations: [AppComponent, TableCdkExampleComponent, PricingLookupComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FundamentalNgxModule,
    MatTableModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
