import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../core/models/product/product.model';
import { ProductService } from '../../../core/services/product/product.service';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
})
export class MyProductComponent implements OnInit {
  productModel: Observable<ProductModel[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productModel = this.productService.getMyProduct();
  }

  deleteProduct(id: number) {
    this.productService.deleteProductByUser(id)
      .subscribe();
  }
}
