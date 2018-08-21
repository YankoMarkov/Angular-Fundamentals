import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../core/models/product/product.model';
import { ProductService } from '../../../core/services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-delete-my-product',
  templateUrl: './delete-my-product.component.html',
  styleUrls: ['./delete-my-product.component.css']
})
export class DeleteMyProductComponent implements OnInit {
  deleteModel$: Observable<ProductModel>;
  id: number;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.deleteModel$ = this.productService.getProductDetails(this.id);
  }

  deleteProduct(id: number) {
    this.productService.deleteProductByUser(id)
      .subscribe();
  }
}
