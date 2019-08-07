import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FundamentalNgxModule } from 'fundamental-ngx';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { SuiModule } from 'ng2-semantic-ui';

import { PricingLookupComponent } from './pricing-lookup/pricing-lookup.component';

@NgModule({
  declarations: [AppComponent, PricingLookupComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FundamentalNgxModule,
    MatTableModule,
    CdkTableModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
