import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
//vender modules
import { Ng2SmartTableModule } from 'ng2-smart-table';
import 'hammerjs';

import { AppComponent } from './app.component';
import { TaskorderComponent } from './taskorder/taskorder.component';
import { FinancialComponent } from './financial/financial.component';
import { OfficialComponent } from './official/official.component';
import { JurisdictionComponent } from './jurisdiction/jurisdiction.component';
import { LocationComponent } from './location/location.component';
import { KpiSlaComponent } from './kpi-sla/kpi-sla.component';
import { ServiceAwardedComponent } from './service-awarded/service-awarded.component';
import { ClinAwardedComponent } from './clin-awarded/clin-awarded.component';
import { InvoiceAccountComponent } from './invoice-account/invoice-account.component';
import { NewOfficialComponent } from './modals/new-official/new-official.component';
import { NewPopComponent } from './modals/new-pop/new-pop.component';
import { NewLocationComponent } from './modals/new-location/new-location.component';
import { NewJurisdictionComponent } from './modals/new-jurisdiction/new-jurisdiction.component';
import { NewServiceComponent } from './modals/new-service/new-service.component';
import { NewKpiComponent } from './modals/new-kpi/new-kpi.component';
import { NewClinComponent } from './modals/new-clin/new-clin.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskorderComponent,
    FinancialComponent,
    OfficialComponent,
    JurisdictionComponent,
    LocationComponent,
    KpiSlaComponent,
    ServiceAwardedComponent,
    ClinAwardedComponent,
    InvoiceAccountComponent,
    NewOfficialComponent,
    NewPopComponent,
    NewLocationComponent,
    NewJurisdictionComponent,
    NewServiceComponent,
    NewKpiComponent,
    NewClinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
