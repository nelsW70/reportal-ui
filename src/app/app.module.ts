import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FundamentalNgxModule } from 'fundamental-ngx';
import {
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { CdkTableModule } from '@angular/cdk/table';
import { SuiModule } from 'ng2-semantic-ui';

import { PricingLookupComponent } from './pricing-lookup/pricing-lookup.component';
import { PricingLookupTableLargeComponent } from './pricing-lookup-table-large/pricing-lookup-table-large.component';
import { ThdProspectsComponent } from './thd-prospects/thd-prospects.component';
import { ThdProspectsTableLargeComponent } from './thd-prospects-table-large/thd-prospects-table-large.component';
import { EDealerComponent } from './e-dealer/e-dealer.component';
import { InvoiceLookupComponent } from './invoice-lookup/invoice-lookup.component';
import { InvoiceLookupTableLargeComponent } from './invoice-lookup-table-large/invoice-lookup-table-large.component';
import { InvoiceLookupTableXlargeComponent } from './invoice-lookup-table-xlarge/invoice-lookup-table-xlarge.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingLookupComponent,
    PricingLookupTableLargeComponent,
    ThdProspectsComponent,
    ThdProspectsTableLargeComponent,
    EDealerComponent,
    InvoiceLookupComponent,
    InvoiceLookupTableLargeComponent,
    InvoiceLookupTableXlargeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    FundamentalNgxModule,
    MatTableModule,
    CdkTableModule,
    SuiModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
