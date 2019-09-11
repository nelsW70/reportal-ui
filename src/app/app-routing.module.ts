import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingLookupComponent } from './pricing-lookup/pricing-lookup.component';
import { InventoryLookupComponent } from './inventory-lookup/inventory-lookup.component';
import { InvoiceLookupComponent } from './invoice-lookup/invoice-lookup.component';
import { EDealerComponent } from './e-dealer/e-dealer.component';
import { ThdProspectsComponent } from './thd-prospects/thd-prospects.component';

const routes: Routes = [
  { path: '', redirectTo: '/pricing-lookup', pathMatch: 'full' },
  { path: 'pricing-lookup', component: PricingLookupComponent },
  { path: 'invoice-lookup', component: InvoiceLookupComponent },
  { path: 'inventory-lookup', component: InventoryLookupComponent },
  { path: 'eDealer', component: EDealerComponent },
  { path: 'thd-prospects', component: ThdProspectsComponent },
  { path: '**', redirectTo: 'pricing-lookup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
