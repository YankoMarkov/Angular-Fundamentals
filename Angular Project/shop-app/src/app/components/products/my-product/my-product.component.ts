import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../core/models/product/product.model';
import { ProductService } from '../../../core/services/product/product.service';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
})
export class MyProductComponent implements OnInit {
  productModel: Observable<ProductModel[]>;

  constructor(private productService: ProductService,
    private authService: AuthService) { }

  ngOnInit() {
    this.productModel = this.productService.getMyProduct();
  }

  deleteProduct(id: number) {
    this.productService.deleteProductByUser(id)
      .subscribe();
  }
}
