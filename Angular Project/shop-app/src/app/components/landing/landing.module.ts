import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeService } from '../../core/services/home/home.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    HomeService
  ]
})
export class LandingModule { }
