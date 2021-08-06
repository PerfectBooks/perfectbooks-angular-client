import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { UniversalbarComponent } from './header/universalbar/universalbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceHeaderComponent } from './pages/service-header/service-header.component';
import { PrivateLimitedCompanyComponent } from './pages/business-incorporation/business-registration/private-limited-company/private-limited-company.component';
import { LimitedLiabilityPartnershipComponent } from './pages/business-incorporation/business-registration/limited-liability-partnership/limited-liability-partnership.component';
import { OnePersonCompanyComponent } from './pages/business-incorporation/business-registration/one-person-company/one-person-company.component';
import { PartnershipFirmComponent } from './pages/business-incorporation/business-registration/partnership-firm/partnership-firm.component';
import { SoleProprietorshipFirmComponent } from './pages/business-incorporation/business-registration/sole-proprietorship-firm/sole-proprietorship-firm.component';
import { SectionEightCompanyRegistrationComponent } from './pages/business-incorporation/business-registration/section-eight-company-registration/section-eight-company-registration.component';
import { ProducerCompanyRegistrationComponent } from './pages/business-incorporation/business-registration/producer-company-registration/producer-company-registration.component';
import { NidhiCompanyComponent } from './pages/business-incorporation/business-registration/nidhi-company/nidhi-company.component';
import { ProprietorshipToPartnershipComponent } from './pages/business-incorporation/business-conversion/proprietorship-to-partnership/proprietorship-to-partnership.component';
import { ProprietorshipToLimitedLiablityPartnershipComponent } from './pages/business-incorporation/business-conversion/proprietorship-to-limited-liablity-partnership/proprietorship-to-limited-liablity-partnership.component';
import { ProprietorshipToPrivateLimitedCompanyComponent } from './pages/business-incorporation/business-conversion/proprietorship-to-private-limited-company/proprietorship-to-private-limited-company.component';
import { ProprietorshipToOnePersonCompanyComponent } from './pages/business-incorporation/business-conversion/proprietorship-to-one-person-company/proprietorship-to-one-person-company.component';
import { PartnershipToLimitedLiablityPartnershipComponent } from './pages/business-incorporation/business-conversion/partnership-to-limited-liablity-partnership/partnership-to-limited-liablity-partnership.component';
import { PartnershipToPrivateLimitedCompanyComponent } from './pages/business-incorporation/business-conversion/partnership-to-private-limited-company/partnership-to-private-limited-company.component';
import { OnePersonCompanyToPrivateLimitedCompanyComponent } from './pages/business-incorporation/business-conversion/one-person-company-to-private-limited-company/one-person-company-to-private-limited-company.component';
import { PrivateLimitedCompanyToLimitedLiablityPartnershipComponent } from './pages/business-incorporation/business-conversion/private-limited-company-to-limited-liablity-partnership/private-limited-company-to-limited-liablity-partnership.component';
import { PrivateCompanyToPublicCompanyComponent } from './pages/business-incorporation/business-conversion/private-company-to-public-company/private-company-to-public-company.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    UniversalbarComponent,
    HomeComponent,
    ServiceHeaderComponent,
    PrivateLimitedCompanyComponent,
    LimitedLiabilityPartnershipComponent,
    OnePersonCompanyComponent,
    PartnershipFirmComponent,
    SoleProprietorshipFirmComponent,
    SectionEightCompanyRegistrationComponent,
    ProducerCompanyRegistrationComponent,
    NidhiCompanyComponent,
    ProprietorshipToPartnershipComponent,
    ProprietorshipToLimitedLiablityPartnershipComponent,
    ProprietorshipToPrivateLimitedCompanyComponent,
    ProprietorshipToOnePersonCompanyComponent,
    PartnershipToLimitedLiablityPartnershipComponent,
    PartnershipToPrivateLimitedCompanyComponent,
    OnePersonCompanyToPrivateLimitedCompanyComponent,
    PrivateLimitedCompanyToLimitedLiablityPartnershipComponent,
    PrivateCompanyToPublicCompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
