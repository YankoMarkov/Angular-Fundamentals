import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../core/models/product/product.model';
import { CategoryService } from '../../../core/services/category/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product/product.service';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { CategoryModel } from '../../../core/models/category/category.model';

@Component({
  selector: 'app-more-by-category',
  templateUrl: './more-by-category.component.html',
  styleUrls: ['./more-by-category.component.css']
})
export class MoreByCategoryComponent implements OnInit {
  categoryModel$: Observable<ProductModel[]>;
  category: CategoryModel;
  id: number;
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.categoryService.productsByCategory(this.id)
      .subscribe(() => {
        this.categoryModel$ = this.store.pipe(select(state => state.category.moreByCategory));
      });
    this.categoryService.getCategory(this.id)
      .subscribe(() => {
        this.store.pipe(select(state => state.category.category))
          .subscribe(category => this.category = category);
      })
  }

  changePage(page) {
    this.currentPage = page;
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe()
  }
}
