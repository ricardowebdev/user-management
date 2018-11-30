import { BrowserModule              } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes       } from '@angular/router';
import { BrowserAnimationsModule    } from '@angular/platform-browser/animations';
import { FormsModule,
         ReactiveFormsModule        } from '@angular/forms';

import { MDBBootstrapModule         } from 'angular-bootstrap-md';
import { AppComponent               } from './app.component';
import { SharedModule               } from './shared/shared.module';
import { appRoutes                  } from './common/app.routing';
import { LoginComponent             } from './application/login/login.component';
import { UserComponent              } from './application/user/user.component';
import { DashboardComponent         } from './application/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
