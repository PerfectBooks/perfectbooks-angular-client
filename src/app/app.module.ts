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
import { PrivateLimitedCompanyComponent } from './pages/business-incorporation/private-limited-company/private-limited-company.component';
import { LimitedLiabilityPartnershipComponent } from './pages/business-incorporation/limited-liability-partnership/limited-liability-partnership.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
