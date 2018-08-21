import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../core/models/product/product.model';
import { ProductService } from '../../../core/services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '../../../../../node_modules/@ngrx/store';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editModel: ProductModel

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.productService.getProduct(this.route.snapshot.params['id'])
      .subscribe(() => {
        this.store.pipe(select(state => state.product.product))
          .subscribe(product => this.editModel = product);
      });
  }

  edit() {
    this.productService.editProduct(this.editModel.id, this.editModel)
      .subscribe();
  }
}
