import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../core/models/product/product.model';
import { ProductService } from '../../../core/services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { CreateReviewModel } from '../../../core/models/review/create-review.model';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  detailsModel$: Observable<ProductModel>;
  reviewModel: CreateReviewModel;
  id: number;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.id = this.route.snapshot.params['id'];
    this.reviewModel = new CreateReviewModel(1, "");
  }

  ngOnInit() {
    this.productService.getProductDetails(this.id)
      .subscribe(() => {
        this.detailsModel$ = this.store.pipe(select(state => state.product.productDetails));
      })
  }

  buyProduct(data) {
    this.productService.buyProduct(data.id, data)
      .subscribe()
  }

  addReview() {
    this.productService.createReview(this.id, this.reviewModel)
      .subscribe(() => {
        this.productService.getReviews(this.id)
          .subscribe(() => {
            this.store.pipe(select(state => state.product.productReviews));
          });
      });
    this.reviewModel = new CreateReviewModel(1, "");
  }

  like(id: number) {
    this.productService.like(id, {})
      .subscribe(() => {
        this.productService.getProductDetails(this.id)
          .subscribe(() => {
            this.detailsModel$ = this.store.pipe(select(state => state.product.productDetails));
          })
      });
  }
}
