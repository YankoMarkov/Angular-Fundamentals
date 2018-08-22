import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../../core/models/category/category.model';
import { CategoryService } from '../../../core/services/category/category.service';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {
  categoryModel$: Observable<CategoryModel[]>

  constructor(
    private categoryService: CategoryService,
    private authService: AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.categoryService.allCategories()
      .subscribe(() => {
        this.categoryModel$ = this.store.pipe(select(state => state.category.all));
      });
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id)
      .subscribe(() => {
        this.categoryService.allCategories()
          .subscribe(() => {
            this.categoryModel$ = this.store.pipe(select(state => state.category.all));
          });
      });
  }
}
