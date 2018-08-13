import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product/product.service';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../core/models/product/product.model';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  productModel: Observable<ProductModel[]>
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(private productService: ProductService,
    private authService: AuthService) { }

  ngOnInit() {
    this.productModel = this.productService.getAllProducts()
  }

  changePage(page) {
    this.currentPage = page;
  }
}
