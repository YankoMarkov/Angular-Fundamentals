import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../core/models/product/product.model';
import { ProductService } from '../../../core/services/product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  detailsModel: Observable<ProductModel>;
  product: ProductModel
  id: number;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.detailsModel = this.productService.getProductDetails(this.id)
  }

  buyProduct(data) {
    this.productService.buyProduct(data.id, data)
      .subscribe()
  }
}
