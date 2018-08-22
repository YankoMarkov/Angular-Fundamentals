import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../core/models/product/product.model';
import { Observable } from 'rxjs';
import { ProductService } from '../../../core/services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { AppState } from '../../../store/app.state';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  deleteModel$: Observable<ProductModel>;
  id: number;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.productService.getProductDetails(this.id)
      .subscribe(() => {
        this.deleteModel$ = this.store.pipe(select(state => state.product.productDetails));
      });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe();
  }
}
