import { Component, OnInit } from '@angular/core';
import { CreateFurnitureModel } from '../../../core/models/furniture/create-furniture.model';
import { FurnitureService } from '../../../core/services/furniture/furniture.service';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  furnitureModel: CreateFurnitureModel;

  constructor(private furnitureService: FurnitureService) {
    this.furnitureModel = new CreateFurnitureModel("", "", 0, 1, "", "");
  }

  create() {
    this.furnitureService.createFurniture(this.furnitureModel)
      .subscribe();
  }

  ngOnInit() {
  }
}
