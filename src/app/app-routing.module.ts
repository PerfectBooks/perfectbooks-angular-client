import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PrivateLimitedCompanyComponent} from './pages/business-incorporation/business-registration/private-limited-company/private-limited-company.component';
import {LimitedLiabilityPartnershipComponent} from './pages/business-incorporation/business-registration/limited-liability-partnership/limited-liability-partnership.component';
const routes: Routes = [
{path:'', component: HomeComponent},
{path:'home', component: HomeComponent},
{path:'plc', component: PrivateLimitedCompanyComponent},
{path: 'llp', component: LimitedLiabilityPartnershipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
