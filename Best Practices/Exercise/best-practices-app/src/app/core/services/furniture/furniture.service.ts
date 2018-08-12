import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateFurnitureModel } from '../../models/furniture/create-furniture.model';
import { FurnitureModel } from '../../models/furniture/furniture.model';

const createUrl = 'http://localhost:5000/furniture/create';
const allUrl = 'http://localhost:5000/furniture/all';
const detailsUrl = 'http://localhost:5000/furniture/details/';
const myUrl = 'http://localhost:5000/furniture/mine';
const deleteUrl = 'http://localhost:5000/furniture/delete/';
const furnitureByIdUrl = 'http://localhost:5000/furniture/';
const editFurnitureUrl = 'http://localhost:5000/furniture/edit/';

@Injectable()
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

  getFurnitureById(id: number) {
    return this.http.get<FurnitureModel>(furnitureByIdUrl + id);
  }

  editFurniture(id: number, body: FurnitureModel) {
    return this.http.put(editFurnitureUrl + id, body);
  }
}
