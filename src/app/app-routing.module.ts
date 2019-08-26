import { EDealerComponent } from './e-dealer/e-dealer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingLookupComponent } from './pricing-lookup/pricing-lookup.component';
import { ThdProspectsComponent } from './thd-prospects/thd-prospects.component';

const routes: Routes = [
  { path: 'pricing-lookup', component: PricingLookupComponent },
  { path: 'thd-prospects', component: ThdProspectsComponent },
  { path: 'e-dealer', component: EDealerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
