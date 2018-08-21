import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product/product.service';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../core/models/product/product.model';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { AddSearchedProductsAction } from '../../../store/products/product.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  productModel$: Observable<ProductModel[]>
  searchModel: string;
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.productService.getAllProducts(this.currentPage, this.searchModel)
      .subscribe(() => {
        this.productModel$ = this.store.pipe(select(state => state.product.all));
      })

  }

  changePage(page) {
    this.currentPage = page;
  }

  search() {
    this.productService.getAllProducts(this.currentPage, this.searchModel)
      .subscribe(() => {
        this.store.pipe(select(state => state.product.all))
          .subscribe(products => {
            this.store.dispatch(new AddSearchedProductsAction(products));
          });
      });
    this.router.navigate(['/product/searchedProducts']);
  }
}
