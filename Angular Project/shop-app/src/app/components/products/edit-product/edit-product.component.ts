import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../core/models/product/product.model';
import { ProductService } from '../../../core/services/product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editModel: ProductModel

  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.productService.getProduct(this.route.snapshot.params['id'])
      .subscribe(data => {
        console.log(data)
        this.editModel = data
      });
  }

  edit() {
    this.productService.editProduct(this.editModel.id, this.editModel)
      .subscribe();
  }
}
