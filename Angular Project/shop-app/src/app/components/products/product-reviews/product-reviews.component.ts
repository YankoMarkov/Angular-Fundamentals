import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewModel } from '../../../core/models/review/review.model';
import { ProductService } from '../../../core/services/product/product.service';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {
  @Input() productId: number;
  reviewModel$: Observable<ReviewModel[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    console.log(this.productId)
    this.reviewModel$ = this.productService.getReviews(this.productId);
  }
}
