import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateCategoryModel } from '../../models/category/create-category.model';
import { ProductModel } from '../../models/product/product.model';
import { CategoryModel } from '../../models/category/category.model';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import {
  AllCategoryAction,
  MoreByCategoryAction,
  DeleteCategoryAction,
  CreateCategoryAction,
  GetCategoryAction
} from '../../../store/category/category.actions';
import { map } from 'rxjs/operators';

const createUrl = 'http://localhost:5000/category/create';
const deleteUrl = 'http://localhost:5000/category/delete/';
const allUrl = 'http://localhost:5000/category/all';
const productsByCategoryUrl = 'http://localhost:5000/category/more/';
const getCategoryUrl = 'http://localhost:5000/category/';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  createCategory(body: CreateCategoryModel) {
    return this.http.post(createUrl, body)
      .pipe(map((category: CategoryModel) => {
        this.store.dispatch(new CreateCategoryAction(category));
      }))
  }

  deleteCategory(id: number) {
    return this.http.delete(deleteUrl + id)
      .pipe(map(result => {
        this.store.dispatch(new DeleteCategoryAction(result));
      }))
  }

  productsByCategory(id: number) {
    return this.http.get<ProductModel[]>(productsByCategoryUrl + id)
      .pipe(map((products: ProductModel[]) => {
        this.store.dispatch(new MoreByCategoryAction(products));
      }))
  }

  allCategories() {
    return this.http.get<CategoryModel[]>(allUrl)
      .pipe(map((categories: CategoryModel[]) => {
        this.store.dispatch(new AllCategoryAction(categories));
      }));
  }

  getCategory(id: number) {
    return this.http.get<CategoryModel>(getCategoryUrl + id)
      .pipe(map((category: CategoryModel) => {
        this.store.dispatch(new GetCategoryAction(category));
      }));
  }
}
