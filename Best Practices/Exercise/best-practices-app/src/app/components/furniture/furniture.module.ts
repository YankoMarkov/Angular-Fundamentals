import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { furnitureComponents } from '.';
import { FurnitureService } from '../../core/services/furniture/furniture.service';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { RouterModule } from '@angular/router';
import { furnitureRoutes } from './furniture.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthService } from '../../core/services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forChild(furnitureRoutes),
    NgxPaginationModule
  ],
  declarations: [
    ...furnitureComponents,
  ],
  providers: [
    FurnitureService,
    AuthService
  ],
  exports: [
    RouterModule
  ]
})
export class FurnitureModule { }
