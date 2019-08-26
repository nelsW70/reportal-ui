import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FundamentalNgxModule } from 'fundamental-ngx';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { SuiModule } from 'ng2-semantic-ui';

import { PricingLookupComponent } from './pricing-lookup/pricing-lookup.component';
import { PricingLookupTableLargeComponent } from './pricing-lookup-table-large/pricing-lookup-table-large.component';
import { ThdProspectsComponent } from './thd-prospects/thd-prospects.component';
import { ThdProspectsTableLargeComponent } from './thd-prospects-table-large/thd-prospects-table-large.component';
import { EDealerComponent } from './e-dealer/e-dealer.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingLookupComponent,
    PricingLookupTableLargeComponent,
    ThdProspectsComponent,
    ThdProspectsTableLargeComponent,
    EDealerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FundamentalNgxModule,
    MatTableModule,
    CdkTableModule,
    SuiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
