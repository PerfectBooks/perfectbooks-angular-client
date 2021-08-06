import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PrivateLimitedCompanyComponent} from './pages/business-incorporation/business-registration/private-limited-company/private-limited-company.component';
import {LimitedLiabilityPartnershipComponent} from './pages/business-incorporation/business-registration/limited-liability-partnership/limited-liability-partnership.component';
import {PartnershipFirmComponent} from './pages/business-incorporation/business-registration/partnership-firm/partnership-firm.component';
import {NidhiCompanyComponent} from './pages/business-incorporation/business-registration/nidhi-company/nidhi-company.component';
import {OnePersonCompanyComponent} from './pages/business-incorporation/business-registration/one-person-company/one-person-company.component';
import {ProducerCompanyRegistrationComponent} from './pages/business-incorporation/business-registration/producer-company-registration/producer-company-registration.component';
import {SectionEightCompanyRegistrationComponent} from './pages/business-incorporation/business-registration/section-eight-company-registration/section-eight-company-registration.component';
import {SoleProprietorshipFirmComponent} from './pages/business-incorporation/business-registration/sole-proprietorship-firm/sole-proprietorship-firm.component';
import {ProprietorshipToPartnershipComponent} from './pages/business-incorporation/business-conversion/proprietorship-to-partnership/proprietorship-to-partnership.component';
import {ProprietorshipToLimitedLiablityPartnershipComponent} from './pages/business-incorporation/business-conversion/proprietorship-to-limited-liablity-partnership/proprietorship-to-limited-liablity-partnership.component';
import {ProprietorshipToPrivateLimitedCompanyComponent} from './pages/business-incorporation/business-conversion/proprietorship-to-private-limited-company/proprietorship-to-private-limited-company.component';
import {ProprietorshipToOnePersonCompanyComponent} from './pages/business-incorporation/business-conversion/proprietorship-to-one-person-company/proprietorship-to-one-person-company.component';
import {PartnershipToLimitedLiablityPartnershipComponent} from './pages/business-incorporation/business-conversion/partnership-to-limited-liablity-partnership/partnership-to-limited-liablity-partnership.component';
import {PartnershipToPrivateLimitedCompanyComponent} from './pages/business-incorporation/business-conversion/partnership-to-private-limited-company/partnership-to-private-limited-company.component';
import {OnePersonCompanyToPrivateLimitedCompanyComponent} from './pages/business-incorporation/business-conversion/one-person-company-to-private-limited-company/one-person-company-to-private-limited-company.component';
import {PrivateLimitedCompanyToLimitedLiablityPartnershipComponent} from './pages/business-incorporation/business-conversion/private-limited-company-to-limited-liablity-partnership/private-limited-company-to-limited-liablity-partnership.component';
import {PrivateCompanyToPublicCompanyComponent} from './pages/business-incorporation/business-conversion/private-company-to-public-company/private-company-to-public-company.component';


const routes: Routes = [
{path:'', component: HomeComponent},
{path:'home', component: HomeComponent},
{path:'private-limited-company', component: PrivateLimitedCompanyComponent},
{path:'limited-liablity-partnership', component: LimitedLiabilityPartnershipComponent},
{path:'partnership-firm', component: PartnershipFirmComponent},
{path:'nidhi-company', component: NidhiCompanyComponent},
{path:'one-person-company',component:OnePersonCompanyComponent},
{path:'producer-company-registration',component:ProducerCompanyRegistrationComponent},
{path:'section-eight-company-registration',component:SectionEightCompanyRegistrationComponent},
{path:'sole-proprietorship-firm',component:SoleProprietorshipFirmComponent},
{path:'proprietorship-to-partnership',component:ProprietorshipToPartnershipComponent},
{path:'proprietorship-to-limited-liablity-partnership',component:ProprietorshipToLimitedLiablityPartnershipComponent},
{path:'proprietorship-to-private-limited-company',component:ProprietorshipToPrivateLimitedCompanyComponent},
{path:'proprietorship-to-one-person-company',component:ProprietorshipToOnePersonCompanyComponent},
{path:'partnership-to-limited-liablity-partnership',component:PartnershipToLimitedLiablityPartnershipComponent},
{path:'partnership-to-private-limited-company',component:PartnershipToPrivateLimitedCompanyComponent},
{path:'one-person-company-to-private-limited-company',component:OnePersonCompanyToPrivateLimitedCompanyComponent},
{path:'private-limited-company-to-limited-liablity-partnership',component:PrivateLimitedCompanyToLimitedLiablityPartnershipComponent},
{path:'private-company-to-public-company',component:PrivateCompanyToPublicCompanyComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
