import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { categoriesComponents } from '.';
import { CategoryService } from '../../core/services/category/category.service';
import { FormsModule } from '@angular/forms';
import { CategoryRoutingModule } from './category.router';
import { ProductService } from '../../core/services/product/product.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    CategoryRoutingModule
  ],
  declarations: [
    ...categoriesComponents
  ],
  providers: [
    CategoryService,
    ProductService,
    AuthService
  ]
})
export class CategoriesModule { }
