import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FurnitureModel } from '../models/furniture.model';
import { FurnitureService } from '../furniture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {
  furnituresModels: Observable<Array<FurnitureModel>>

  constructor(private furnitureService: FurnitureService, private router: Router) { }

  ngOnInit() {
    this.furnituresModels = this.furnitureService.getMyFurniture();
  }

  deleteItem(id: number) {
    this.furnitureService.deleteFurniture(id)
      .subscribe(data => this.router.navigate(['/furniture/all']));
  }
}
