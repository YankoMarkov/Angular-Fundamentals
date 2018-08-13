import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../../core/models/category/category.model';
import { CategoryService } from '../../../core/services/category/category.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {
  categoryModel: Observable<CategoryModel[]>

  constructor(private categoryService: CategoryService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.categoryModel = this.categoryService.allCategories();
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id)
      .subscribe();
  }
}
