import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allServices } from '.';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorsModule } from '../interceptors/interceptors.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    InterceptorsModule
  ],
  providers: [
    ...allServices
  ]
})
export class ServicesModule { }
