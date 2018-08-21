import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateProductModel } from '../../models/product/create-product.model';
import { ProductModel } from '../../models/product/product.model';
import { CreateReviewModel } from '../../models/review/create-review.model';
import { ReviewModel } from '../../models/review/review.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { map } from 'rxjs/operators';
import {
  CreateProductAction,
  AllProductsAction,
  MyProductsAction,
  DeleteProductAction,
  DeleteMyProductAction,
  GetProductAction,
  BuyProductAction,
  ProductDetailsAction,
  EditProductAction,
  AddProductReviewsAction,
  GetProductReviewsAction,
  AddLikesAction
} from '../../../store/products/product.actions';

const createUrl = 'http://localhost:5000/product/create';
const allUrl = 'http://localhost:5000/product/all';
const detailsUrl = 'http://localhost:5000/product/details/';
const likeUrl = 'http://localhost:5000/product/details/';
const createReviewUrl = 'http://localhost:5000/product/details/';
const reviewsUrl = 'http://localhost:5000/product/details/';
const myUrl = 'http://localhost:5000/product/mine';
const deleteUrl = 'http://localhost:5000/product/delete/';
const deleteProductUrl = 'http://localhost:5000/product/deleteProduct/';
const editProductUrl = 'http://localhost:5000/product/edit/';
const buyProductUrl = 'http://localhost:5000/product/buy/';
const getProductUrl = 'http://localhost:5000/product/';

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  createProduct(body: CreateProductModel) {
    return this.http.post(createUrl, body)
      .pipe(map((product: ProductModel) => {
        this.store.dispatch(new CreateProductAction(product));
      }));
  }

  getAllProducts(page: number, search: string) {
    let url = `${allUrl}?page=${page}`;
    if (search) {
      url += `&search=${search}`;
    }
    return this.http.get<ProductModel[]>(url)
      .pipe(map((products: ProductModel[]) => {
        this.store.dispatch(new AllProductsAction(products));
      }));
  }

  getProductDetails(id: number) {
    return this.http.get<ProductModel>(detailsUrl + id)
      .pipe(map((product: ProductModel) => {
        this.store.dispatch(new ProductDetailsAction(product));
      }));
  }

  like(id: number, body: object) {
    return this.http.post(`${likeUrl}${id}/like`, body)
      .pipe(map(result => {
        this.store.dispatch(new AddLikesAction(result));
      }));
  }

  createReview(id: number, body: CreateReviewModel) {
    return this.http.post(`${createReviewUrl}${id}/reviews/create`, body)
      .pipe(map((review: ReviewModel) => {
        this.store.dispatch(new AddProductReviewsAction(review));
      }));
  }

  getReviews(id: number) {
    return this.http.get<ReviewModel[]>(`${reviewsUrl}${id}/reviews`)
      .pipe(map((review: ReviewModel) => {
        this.store.dispatch(new GetProductReviewsAction(review));
      }));
  }

  getMyProduct() {
    return this.http.get<ProductModel[]>(myUrl)
      .pipe(map((products: ProductModel[]) => {
        this.store.dispatch(new MyProductsAction(products));
      }));
  }

  deleteProduct(id: number) {
    return this.http.delete(deleteUrl + id)
      .pipe(map(result => {
        this.store.dispatch(new DeleteProductAction(result));
      }));
  }

  deleteProductByUser(id: number) {
    return this.http.delete(deleteProductUrl + id)
      .pipe(map(result => {
        this.store.dispatch(new DeleteMyProductAction(result));
      }));
  }

  editProduct(id: number, body: ProductModel) {
    return this.http.put(editProductUrl + id, body)
      .pipe(map((product: ProductModel) => {
        this.store.dispatch(new EditProductAction(product));
      }));
  }

  buyProduct(id: number, body: ProductModel) {
    return this.http.put(buyProductUrl + id, body)
      .pipe(map((product: ProductModel) => {
        this.store.dispatch(new BuyProductAction(product));
      }));
  }

  getProduct(id: number) {
    return this.http.get<ProductModel>(getProductUrl + id)
      .pipe(map((product: ProductModel) => {
        this.store.dispatch(new GetProductAction(product));
      }));
  }
}
