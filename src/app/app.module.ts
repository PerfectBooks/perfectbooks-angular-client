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
import { ItrOneComponent } from './pages/income-tax/itr-filing/itr-one/itr-one.component';
import { CopyrightRegistrationComponent } from './pages/trademark-ip/copyright/copyright-registration/copyright-registration.component';
import { PatentSearchComponent } from './pages/trademark-ip/patent/patent-search/patent-search.component';
import { ProvisionalPatentComponent } from './pages/trademark-ip/patent/provisional-patent/provisional-patent.component';
import { PermanentPatentComponent } from './pages/trademark-ip/patent/permanent-patent/permanent-patent.component';
import { TrademarkRegistrationComponent } from './pages/trademark-ip/trademark/trademark-registration/trademark-registration.component';
import { TrademarkObjectionReplyComponent } from './pages/trademark-ip/trademark/trademark-objection-reply/trademark-objection-reply.component';
import { TrademarkOppositionComponent } from './pages/trademark-ip/trademark/trademark-opposition/trademark-opposition.component';
import { TrademarkAssignmentComponent } from './pages/trademark-ip/trademark/trademark-assignment/trademark-assignment.component';
import { TrademarkRenewalComponent } from './pages/trademark-ip/trademark/trademark-renewal/trademark-renewal.component';
import { AccountingAndBookkeepingComponent } from './pages/compliance/accounting/accounting-and-bookkeeping/accounting-and-bookkeeping.component';
import { ClosePrivateLimitedCompanyComponent } from './pages/compliance/close-business/close-private-limited-company/close-private-limited-company.component';
import { CloseLimitLiablityPartnershipComponent } from './pages/compliance/close-business/close-limit-liablity-partnership/close-limit-liablity-partnership.component';
import { CloseOnePersonCompanyComponent } from './pages/compliance/close-business/close-one-person-company/close-one-person-company.component';
import { DissolvePartnershipFirmComponent } from './pages/compliance/close-business/dissolve-partnership-firm/dissolve-partnership-firm.component';
import { AnnualCompliancePrivateLimitedCompanyComponent } from './pages/compliance/corporate-compliance/annual-compliance-private-limited-company/annual-compliance-private-limited-company.component';
import { AnnualFilingLimitedLiablityPartnershipComponent } from './pages/compliance/corporate-compliance/annual-filing-limited-liablity-partnership/annual-filing-limited-liablity-partnership.component';
import { FileDirThreeKycComponent } from './pages/compliance/corporate-compliance/file-dir-three-kyc/file-dir-three-kyc.component';
import { FileIncTwentyAComponent } from './pages/compliance/corporate-compliance/file-inc-twenty-a/file-inc-twenty-a.component';
import { FileIncTwentyTwoAComponent } from './pages/compliance/corporate-compliance/file-inc-twenty-two-a/file-inc-twenty-two-a.component';
import { AddRemoveDirectorComponent } from './pages/compliance/update-corporate-information/add-remove-director/add-remove-director.component';
import { AddRemovePartnerComponent } from './pages/compliance/update-corporate-information/add-remove-partner/add-remove-partner.component';
import { ChangeBusinessActivityComponent } from './pages/compliance/update-corporate-information/change-business-activity/change-business-activity.component';
import { ChangeRegisteredOfficeComponent } from './pages/compliance/update-corporate-information/change-registered-office/change-registered-office.component';
import { ChangeCompanyNameComponent } from './pages/compliance/update-corporate-information/change-company-name/change-company-name.component';
import { ChangeLimitedLiablityPartnershipAgreementComponent } from './pages/compliance/update-corporate-information/change-limited-liablity-partnership-agreement/change-limited-liablity-partnership-agreement.component';
import { ChangePartnershipDeedComponent } from './pages/compliance/update-corporate-information/change-partnership-deed/change-partnership-deed.component';
import { IncreaseAuthorisedShareCapitalComponent } from './pages/compliance/update-corporate-information/increase-authorised-share-capital/increase-authorised-share-capital.component';
import { EssentialBusinessAgreementKitComponent } from './pages/legal-drafting/document-kits/essential-business-agreement-kit/essential-business-agreement-kit.component';
import { ResidentialLeaseDeedComponent } from './pages/legal-drafting/real-estate/residential-lease-deed/residential-lease-deed.component';
import { CommercialLeaseDeedComponent } from './pages/legal-drafting/real-estate/commercial-lease-deed/commercial-lease-deed.component';
import { NoticeToVacateTenantComponent } from './pages/legal-drafting/real-estate/notice-to-vacate-tenant/notice-to-vacate-tenant.component';
import { AgreementExtensionComponent } from './pages/legal-drafting/business-agreements/agreement-extension/agreement-extension.component';
import { IndependentContractorAgreementComponent } from './pages/legal-drafting/business-agreements/independent-contractor-agreement/independent-contractor-agreement.component';
import { MemorandumOfUnderstandingComponent } from './pages/legal-drafting/business-agreements/memorandum-of-understanding/memorandum-of-understanding.component';
import { NdaThirdPartyComponent } from './pages/legal-drafting/business-agreements/nda-third-party/nda-third-party.component';
import { WebsiteDisclaimerPolicyComponent } from './pages/legal-drafting/business-agreements/website-disclaimer-policy/website-disclaimer-policy.component';
import { AccountOpeningResolutionComponent } from './pages/legal-drafting/banking-finance/account-opening-resolution/account-opening-resolution.component';
import { ChequePaymentStopLetterComponent } from './pages/legal-drafting/banking-finance/cheque-payment-stop-letter/cheque-payment-stop-letter.component';
import { PromissoryNoteComponent } from './pages/legal-drafting/banking-finance/promissory-note/promissory-note.component';
import { ChequeDishonorNoticeSectionOneThreeEightComponent } from './pages/legal-drafting/banking-finance/cheque-dishonor-notice-section-one-three-eight/cheque-dishonor-notice-section-one-three-eight.component';
import { LegalNoticeComponent } from './pages/legal-drafting/legal-agreements/legal-notice/legal-notice.component';
import { PowerOfAttorneyComponent } from './pages/legal-drafting/legal-agreements/power-of-attorney/power-of-attorney.component';
import { RightToInformationComponent } from './pages/legal-drafting/legal-agreements/right-to-information/right-to-information.component';
import { ServiceLevelAgreementComponent } from './pages/legal-drafting/legal-agreements/service-level-agreement/service-level-agreement.component';
import { TerminationOfAgreementComponent } from './pages/legal-drafting/legal-agreements/termination-of-agreement/termination-of-agreement.component';
import { BillOfSaleComponent } from './pages/legal-drafting/daily-business/bill-of-sale/bill-of-sale.component';
import { DirectSellingAgreementComponent } from './pages/legal-drafting/daily-business/direct-selling-agreement/direct-selling-agreement.component';
import { EstimateSampleComponent } from './pages/legal-drafting/daily-business/estimate-sample/estimate-sample.component';
import { FinalInvoiceComponent } from './pages/legal-drafting/daily-business/final-invoice/final-invoice.component';
import { PurchaseOrderComponent } from './pages/legal-drafting/daily-business/purchase-order/purchase-order.component';
import { StatementOfWorkComponent } from './pages/legal-drafting/daily-business/statement-of-work/statement-of-work.component';
import { AppointmentLetterComponent } from './pages/legal-drafting/employment/appointment-letter/appointment-letter.component';
import { CompletionOfProbationLetterComponent } from './pages/legal-drafting/employment/completion-of-probation-letter/completion-of-probation-letter.component';
import { EmployeeTerminationNoticeComponent } from './pages/legal-drafting/employment/employee-termination-notice/employee-termination-notice.component';
import { EmployeeContractComponent } from './pages/legal-drafting/employment/employee-contract/employee-contract.component';
import { EmploymentAgreementComponent } from './pages/legal-drafting/employment/employment-agreement/employment-agreement.component';
import { NdaForEmployeesComponent } from './pages/legal-drafting/employment/nda-for-employees/nda-for-employees.component';
import { JobOfferRejectionLetterComponent } from './pages/legal-drafting/employment/job-offer-rejection-letter/job-offer-rejection-letter.component';
import { OfferLetterComponent } from './pages/legal-drafting/employment/offer-letter/offer-letter.component';
import { ResignationLetterComponent } from './pages/legal-drafting/employment/resignation-letter/resignation-letter.component';
import { RelievingLetterComponent } from './pages/legal-drafting/employment/relieving-letter/relieving-letter.component';
import { ConsumerComplaintLetterComponent } from './pages/legal-drafting/employment/consumer-complaint-letter/consumer-complaint-letter.component';
import { AddingDirectorResolutionComponent } from './pages/legal-drafting/corporate/adding-director-resolution/adding-director-resolution.component';
import { ResignationDirectorResolutionComponent } from './pages/legal-drafting/corporate/resignation-director-resolution/resignation-director-resolution.component';
import { NocAddressProofComponent } from './pages/legal-drafting/corporate/noc-address-proof/noc-address-proof.component';
import { PrivateLimitedCompanyToLimitedLiablityPartnershipResolutionComponent } from './pages/legal-drafting/corporate/private-limited-company-to-limited-liablity-partnership-resolution/private-limited-company-to-limited-liablity-partnership-resolution.component';
import { ShareHolderAgreementComponent } from './pages/legal-drafting/corporate/share-holder-agreement/share-holder-agreement.component';
import { TermSheetComponent } from './pages/legal-drafting/corporate/term-sheet/term-sheet.component';
import { NonDisclosureAgreementComponent } from './pages/legal-drafting/corporate/non-disclosure-agreement/non-disclosure-agreement.component';
import { PrivateLimitedCompanyToPublicLimitedCompanyResolutionComponent } from './pages/legal-drafting/corporate/private-limited-company-to-public-limited-company-resolution/private-limited-company-to-public-limited-company-resolution.component';
import { DigitalSignatureComponent } from './pages/registration-and-licences/registrations/digital-signature/digital-signature.component';
import { PfRegistrationComponent } from './pages/registration-and-licences/registrations/pf-registration/pf-registration.component';
import { ImportExportCodeRegistrationComponent } from './pages/registration-and-licences/registrations/import-export-code-registration/import-export-code-registration.component';
import { StartupIndiaRegistrationComponent } from './pages/registration-and-licences/registrations/startup-india-registration/startup-india-registration.component';
import { SsiMsmeRegistrationComponent } from './pages/registration-and-licences/registrations/ssi-msme-registration/ssi-msme-registration.component';
import { ShopEstablishmentRegistrationComponent } from './pages/registration-and-licences/registrations/shop-establishment-registration/shop-establishment-registration.component';
import { ProfessionalTaxRegistrationComponent } from './pages/registration-and-licences/registrations/professional-tax-registration/professional-tax-registration.component';
import { PanApplicationComponent } from './pages/registration-and-licences/registrations/pan-application/pan-application.component';
import { TanApplicationComponent } from './pages/registration-and-licences/registrations/tan-application/tan-application.component';
import { FssaiRegistrationComponent } from './pages/registration-and-licences/registrations/fssai-registration/fssai-registration.component';
import { EsiRegistrationComponent } from './pages/registration-and-licences/registrations/esi-registration/esi-registration.component';
import { GstReturnFilingComponent } from './pages/goods-and-service-tax/gst/gst-return-filing/gst-return-filing.component';
import { GstRegistrationComponent } from './pages/goods-and-service-tax/gst/gst-registration/gst-registration.component';
import { LutUnderRegistrationComponent } from './pages/goods-and-service-tax/gst/lut-under-registration/lut-under-registration.component';
import { EWayBillComponent } from './pages/goods-and-service-tax/gst/e-way-bill/e-way-bill.component';
import { GstAnnualFilingComponent } from './pages/goods-and-service-tax/gst/gst-annual-filing/gst-annual-filing.component';
import { GstInvoicingComponent } from './pages/goods-and-service-tax/gst/gst-invoicing/gst-invoicing.component';
import { CancellationOfGstComponent } from './pages/goods-and-service-tax/gst/cancellation-of-gst/cancellation-of-gst.component';
import { BusinessIncorporationNavbarComponent } from './header/navbar/business-incorporation-navbar/business-incorporation-navbar.component';
import { BusinessIncorporationMegamenuComponent } from './header/navbar/business-incorporation-navbar/business-incorporation-megamenu/business-incorporation-megamenu.component';
import { ComplianceNavbarComponent } from './header/navbar/compliance-navbar/compliance-navbar.component';
import { ComplianceMegamenuComponent } from './header/navbar/compliance-navbar/compliance-megamenu/compliance-megamenu.component';
import { GoodsAndServiceTaxNavbarComponent } from './header/navbar/goods-and-service-tax-navbar/goods-and-service-tax-navbar.component';
import { GoodsAndServiceTaxMegamenuComponent } from './header/navbar/goods-and-service-tax-navbar/goods-and-service-tax-megamenu/goods-and-service-tax-megamenu.component';
import { IncomeTaxNavbarComponent } from './header/navbar/income-tax-navbar/income-tax-navbar.component';
import { IncomeTaxMegamenuComponent } from './header/navbar/income-tax-navbar/income-tax-megamenu/income-tax-megamenu.component';
import { LegalDraftingNavbarComponent } from './header/navbar/legal-drafting-navbar/legal-drafting-navbar.component';
import { LegalDraftingMegamenuComponent } from './header/navbar/legal-drafting-navbar/legal-drafting-megamenu/legal-drafting-megamenu.component';
import { RegistrationAndLicencesNavbarComponent } from './header/navbar/registration-and-licences-navbar/registration-and-licences-navbar.component';
import { TrademarkIpNavbarComponent } from './header/navbar/trademark-ip-navbar/trademark-ip-navbar.component';
import { TrademarkIpMegamenuComponent } from './header/navbar/trademark-ip-navbar/trademark-ip-megamenu/trademark-ip-megamenu.component';
import { RegistrationAndLicencesMegamenuComponent } from './header/navbar/registration-and-licences-navbar/registration-and-licences-megamenu/registration-and-licences-megamenu.component';

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
    ItrOneComponent,
    CopyrightRegistrationComponent,
    PatentSearchComponent,
    ProvisionalPatentComponent,
    PermanentPatentComponent,
    TrademarkRegistrationComponent,
    TrademarkObjectionReplyComponent,
    TrademarkOppositionComponent,
    TrademarkAssignmentComponent,
    TrademarkRenewalComponent,
    AccountingAndBookkeepingComponent,
    ClosePrivateLimitedCompanyComponent,
    CloseLimitLiablityPartnershipComponent,
    CloseOnePersonCompanyComponent,
    DissolvePartnershipFirmComponent,
    AnnualCompliancePrivateLimitedCompanyComponent,
    AnnualFilingLimitedLiablityPartnershipComponent,
    FileDirThreeKycComponent,
    FileIncTwentyAComponent,
    FileIncTwentyTwoAComponent,
    AddRemoveDirectorComponent,
    AddRemovePartnerComponent,
    ChangeBusinessActivityComponent,
    ChangeRegisteredOfficeComponent,
    ChangeCompanyNameComponent,
    ChangeLimitedLiablityPartnershipAgreementComponent,
    ChangePartnershipDeedComponent,
    IncreaseAuthorisedShareCapitalComponent,
    EssentialBusinessAgreementKitComponent,
    ResidentialLeaseDeedComponent,
    CommercialLeaseDeedComponent,
    NoticeToVacateTenantComponent,
    AgreementExtensionComponent,
    IndependentContractorAgreementComponent,
    MemorandumOfUnderstandingComponent,
    NdaThirdPartyComponent,
    WebsiteDisclaimerPolicyComponent,
    AccountOpeningResolutionComponent,
    ChequePaymentStopLetterComponent,
    PromissoryNoteComponent,
    ChequeDishonorNoticeSectionOneThreeEightComponent,
    LegalNoticeComponent,
    PowerOfAttorneyComponent,
    RightToInformationComponent,
    ServiceLevelAgreementComponent,
    TerminationOfAgreementComponent,
    BillOfSaleComponent,
    DirectSellingAgreementComponent,
    EstimateSampleComponent,
    FinalInvoiceComponent,
    PurchaseOrderComponent,
    StatementOfWorkComponent,
    AppointmentLetterComponent,
    CompletionOfProbationLetterComponent,
    EmployeeTerminationNoticeComponent,
    EmployeeContractComponent,
    EmploymentAgreementComponent,
    NdaForEmployeesComponent,
    JobOfferRejectionLetterComponent,
    OfferLetterComponent,
    ResignationLetterComponent,
    RelievingLetterComponent,
    ConsumerComplaintLetterComponent,
    AddingDirectorResolutionComponent,
    ResignationDirectorResolutionComponent,
    NocAddressProofComponent,
    PrivateLimitedCompanyToLimitedLiablityPartnershipResolutionComponent,
    ShareHolderAgreementComponent,
    TermSheetComponent,
    NonDisclosureAgreementComponent,
    PrivateLimitedCompanyToPublicLimitedCompanyResolutionComponent,
    DigitalSignatureComponent,
    PfRegistrationComponent,
    ImportExportCodeRegistrationComponent,
    StartupIndiaRegistrationComponent,
    SsiMsmeRegistrationComponent,
    ShopEstablishmentRegistrationComponent,
    ProfessionalTaxRegistrationComponent,
    PanApplicationComponent,
    TanApplicationComponent,
    FssaiRegistrationComponent,
    EsiRegistrationComponent,
    GstReturnFilingComponent,
    GstRegistrationComponent,
    LutUnderRegistrationComponent,
    EWayBillComponent,
    GstAnnualFilingComponent,
    GstInvoicingComponent,
    CancellationOfGstComponent,
    BusinessIncorporationNavbarComponent,
    BusinessIncorporationMegamenuComponent,
    ComplianceNavbarComponent,
    ComplianceMegamenuComponent,
    GoodsAndServiceTaxNavbarComponent,
    GoodsAndServiceTaxMegamenuComponent,
    IncomeTaxNavbarComponent,
    IncomeTaxMegamenuComponent,
    LegalDraftingNavbarComponent,
    LegalDraftingMegamenuComponent,
    RegistrationAndLicencesNavbarComponent,
    TrademarkIpNavbarComponent,
    TrademarkIpMegamenuComponent,
    RegistrationAndLicencesMegamenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
