import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productComponents } from '.';
import { ProductService } from '../../core/services/product/product.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomFormsModule } from 'ng2-validation';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product.routing';
import { DetailsProductComponent } from './details-product/details-product.component';
import { MyProductComponent } from './my-product/my-product.component';

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
    AuthService
  ]
})
export class ProductsModule { }
