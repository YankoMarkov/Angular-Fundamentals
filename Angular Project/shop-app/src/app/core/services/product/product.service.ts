import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateProductModel } from '../../models/product/create-product.model';
import { ProductModel } from '../../models/product/product.model';
import { THROW_IF_NOT_FOUND } from '../../../../../node_modules/@angular/core/src/di/injector';

const createUrl = 'http://localhost:5000/product/create';
const allUrl = 'http://localhost:5000/product/all';
const detailsUrl = 'http://localhost:5000/product/details/';
const myUrl = 'http://localhost:5000/product/mine';
const deleteUrl = 'http://localhost:5000/product/delete/';
const deleteProductUrl = 'http://localhost:5000/product/deleteProduct/';
const editProductUrl = 'http://localhost:5000/product/edit/';
const buyProductUrl = 'http://localhost:5000/product/buy/';
const getProductUrl = 'http://localhost:5000/product/';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  createProduct(body: CreateProductModel) {
    return this.http.post(createUrl, body);
  }

  getAllProducts() {
    return this.http.get<ProductModel[]>(allUrl);
  }

  getProductDetails(id: number) {
    return this.http.get<ProductModel>(detailsUrl + id);
  }

  getMyProduct() {
    return this.http.get<ProductModel[]>(myUrl);
  }

  deleteProduct(id: number) {
    return this.http.delete(deleteUrl + id);
  }

  deleteProductByUser(id: number) {
    return this.http.delete(deleteProductUrl + id);
  }

  editProduct(id: number, body: ProductModel) {
    return this.http.put(editProductUrl + id, body);
  }

  buyProduct(id: number, body: ProductModel) {
    return this.http.put(buyProductUrl + id, body);
  }

  getProduct(id: number) {
    return this.http.get<ProductModel>(getProductUrl + id);
  }
}
