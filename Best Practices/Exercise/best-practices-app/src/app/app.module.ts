import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './components/shared/shared.module';
import { LandingModule } from './components/landing/landing.module';
import { AuthModule } from './components/authentication/auth.module';
import { ServicesModule } from './core/services/services.module';
import { GuardsModule } from './core/guards/guards.module';
import { FurnitureModule } from './components/furniture/furniture.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    LandingModule,
    AuthModule,
    ServicesModule,
    GuardsModule,
    FurnitureModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
