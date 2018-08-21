import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewModel } from '../../../core/models/review/review.model';
import { ProductService } from '../../../core/services/product/product.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {
  @Input() productId: number
  reviewModels$: Observable<ReviewModel[]>;

  constructor(
    private productService: ProductService,
    private store: Store<AppState>
  ) {
    this.store.pipe(select(state => state.product.productDetails))
      .subscribe(details => this.productId = details.id);
  }

  ngOnInit() {
    this.productService.getReviews(this.productId)
      .subscribe(() => {
        this.reviewModels$ = this.store.pipe(select(state => state.product.productReviews));
      });
  }
}
