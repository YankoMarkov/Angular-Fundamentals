import { Component, OnInit } from '@angular/core';
import { CreateProductModel } from '../../../core/models/product/create-product.model';
import { ProductService } from '../../../core/services/product/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryModel } from '../../../core/models/category/category.model';
import { CategoryService } from '../../../core/services/category/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  createModel: CreateProductModel;
  categoryModel: Observable<CategoryModel[]>;

  constructor(private productSercvice: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private toastr: ToastrService) {
    this.createModel = new CreateProductModel("", 0, "", "", 0);
  }

  ngOnInit() {
    this.categoryModel = this.categoryService.allCategories()
  }

  create() {
    this.productSercvice.createProduct(this.createModel)
      .subscribe();
  }
}
