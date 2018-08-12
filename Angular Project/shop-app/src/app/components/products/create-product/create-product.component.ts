import { Component, OnInit } from '@angular/core';
import { CreateProductModel } from '../../../core/models/product/create-product.model';
import { ProductService } from '../../../core/services/product/product.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { ToastrService } from '../../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  createModel: CreateProductModel;

  constructor(private productSercvice: ProductService,
    private router: Router,
    private toastr: ToastrService) {
    this.createModel = new CreateProductModel("", 0, "", "");
  }

  ngOnInit() {
  }

  create() {
    this.productSercvice.createProduct(this.createModel)
      .subscribe();
  }
}
