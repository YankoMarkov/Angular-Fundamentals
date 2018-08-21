import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { authComponents } from '.';
import { AuthService } from '../../core/services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ...authComponents
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
