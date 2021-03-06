import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateFurnitureModel } from './models/create-furniture.model';
import { FurnitureModel } from './models/furniture.model';

const createUrl = 'http://localhost:5000/furniture/create'
const allUrl = 'http://localhost:5000/furniture/all'
const detailsUrl = 'http://localhost:5000/furniture/details/'
const myUrl = 'http://localhost:5000/furniture/mine'
const deleteUrl = 'http://localhost:5000/furniture/delete/'

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(private http: HttpClient) { }

  createFurniture(body: CreateFurnitureModel) {
    return this.http.post(createUrl, body);
  }

  getAllFurniture() {
    return this.http.get<FurnitureModel[]>(allUrl);
  }

  getFurnitureDetails(id: number) {
    return this.http.get<FurnitureModel>(detailsUrl + id);
  }

  getMyFurniture() {
    return this.http.get<FurnitureModel[]>(myUrl);
  }

  deleteFurniture(id: number) {
    return this.http.delete(deleteUrl + id);
  }
}
