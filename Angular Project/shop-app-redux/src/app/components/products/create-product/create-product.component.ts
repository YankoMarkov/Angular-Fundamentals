import { Component, OnInit } from '@angular/core';
import { CreateProductModel } from '../../../core/models/product/create-product.model';
import { ProductService } from '../../../core/services/product/product.service';
import { CategoryModel } from '../../../core/models/category/category.model';
import { CategoryService } from '../../../core/services/category/category.service';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/app.state';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  createModel: CreateProductModel;
  categoryModel$: Observable<CategoryModel[]>;

  constructor(
    private productSercvice: ProductService,
    private categoryService: CategoryService,
    private store: Store<AppState>
  ) {
    this.createModel = new CreateProductModel("", 0, "", "", 0);
  }

  ngOnInit() {
    this.categoryService.allCategories()
      .subscribe(() => {
        this.categoryModel$ = this.store.pipe(select(state => state.category.all));
      });
  }

  create() {
    this.productSercvice.createProduct(this.createModel)
      .subscribe();
  }
}
