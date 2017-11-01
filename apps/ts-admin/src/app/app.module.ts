import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModulePro, MDBSpinningPreloader } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MDBBootstrapModulePro.forRoot(), AgmCoreModule.forRoot({ apiKey: environment.agmApiKey })
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
