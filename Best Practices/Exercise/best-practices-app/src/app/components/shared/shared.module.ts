import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth/auth.service';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavigationComponent
  ],
  providers: [
    AuthService
  ],
  exports: [
    NavigationComponent
  ]
})
export class SharedModule { }
