import { BrowserModule              } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule    } from '@angular/platform-browser/animations';
import { AppComponent               } from './app.component';
import { MDBBootstrapModule         } from 'angular-bootstrap-md';
import { FormsModule,
         ReactiveFormsModule        } from '@angular/forms';
import { UserComponent              } from './application/user/user.component';
import { HttpModule                 } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
