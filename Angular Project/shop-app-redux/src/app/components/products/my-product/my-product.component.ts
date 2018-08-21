import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../core/models/product/product.model';
import { ProductService } from '../../../core/services/product/product.service';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Store, select } from '../../../../../node_modules/@ngrx/store';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
})
export class MyProductComponent implements OnInit {
  productModel$: Observable<ProductModel[]>;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.productService.getMyProduct()
      .subscribe(() => {
        this.productModel$ = this.store.pipe(select(state => state.product.myProducts));
      });
  }
}
