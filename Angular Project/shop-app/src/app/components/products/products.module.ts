import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productComponents } from '.';
import { ProductService } from '../../core/services/product/product.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomFormsModule } from 'ng2-validation';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product.routing';
import { CategoryService } from '../../core/services/category/category.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    NgxPaginationModule,
    ProductRoutingModule
  ],
  declarations: [
    ...productComponents
  ],
  providers: [
    ProductService,
    CategoryService,
    AuthService
  ]
})
export class ProductsModule { }
