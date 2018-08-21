import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../core/models/product/product.model';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-searched-products',
  templateUrl: './searched-products.component.html',
  styleUrls: ['./searched-products.component.css']
})
export class SearchedProductsComponent implements OnInit {
  productModel$: Observable<ProductModel[]>
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.productModel$ = this.store.pipe(select(state => state.product.searchedProducts));
  }

  changePage(page) {
    this.currentPage = page;
  }
}
