import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../core/services/home/home.service';
import { landingComponents } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    landingComponents
  ],
  providers: [
    HomeService
  ]
})
export class LandingModule { }
