import { Component, OnInit } from '@angular/core';
import { FurnitureModel } from '../models/furniture.model';
import { FurnitureService } from '../furniture.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furnituresModel: Observable<Array<FurnitureModel>>

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.furnituresModel = this.furnitureService.getAllFurniture();
  }
}
