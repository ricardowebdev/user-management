import { BrowserModule              } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule    } from '@angular/platform-browser/animations';

import { MDBBootstrapModule         } from 'angular-bootstrap-md';
import { AlertComponent             } from './alert/alert.component';

@NgModule({
  declarations: [
    AlertComponent  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [
    AlertComponent
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
