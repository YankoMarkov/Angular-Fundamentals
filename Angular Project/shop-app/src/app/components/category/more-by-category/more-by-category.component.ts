import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../core/models/product/product.model';
import { CategoryService } from '../../../core/services/category/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product/product.service';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-more-by-category',
  templateUrl: './more-by-category.component.html',
  styleUrls: ['./more-by-category.component.css']
})
export class MoreByCategoryComponent implements OnInit {
  categoryModel: Observable<ProductModel[]>
  id: number
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(private categoryService: CategoryService,
    private productService: ProductService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.categoryModel = this.categoryService.productsByCategory(this.id)
  }

  changePage(page) {
    this.currentPage = page;
  }

  deleteProduct(id: number) {
    this.categoryService.deleteProduct(this.id, id)
      .subscribe();
    this.productService.deleteProduct(id)
      .subscribe()
  }
}
