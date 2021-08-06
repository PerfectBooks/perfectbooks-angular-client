import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PrivateLimitedCompanyComponent} from './pages/business-incorporation/business-registration/private-limited-company/private-limited-company.component';
import {LimitedLiabilityPartnershipComponent} from './pages/business-incorporation/business-registration/limited-liability-partnership/limited-liability-partnership.component';
import {PartnershipFirmComponent} from './pages/business-incorporation/business-registration/partnership-firm/partnership-firm.component';

const routes: Routes = [
{path:'', component: HomeComponent},
{path:'home', component: HomeComponent},
{path:'private-limited-company', component: PrivateLimitedCompanyComponent},
{path: 'limited-liablity-partnership', component: LimitedLiabilityPartnershipComponent},
{path: 'partnership-firm', component: PartnershipFirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
