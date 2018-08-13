import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateCategoryModel } from '../../models/category/create-category.model';
import { ProductModel } from '../../models/product/product.model';
import { CategoryModel } from '../../models/category/category.model';

const createUrl = 'http://localhost:5000/category/create';
const deleteUrl = 'http://localhost:5000/category/delete/';
const allUrl = 'http://localhost:5000/category/all';
const productsByCategoryUrl = 'http://localhost:5000/category/more/';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  createCategory(body: CreateCategoryModel) {
    return this.http.post(createUrl, body)
  }

  deleteCategory(id: number) {
    return this.http.delete(deleteUrl + id)
  }

  productsByCategory(id: number) {
    return this.http.get<ProductModel[]>(productsByCategoryUrl + id)
  }

  allCategories() {
    return this.http.get<CategoryModel[]>(allUrl)
  }
}
