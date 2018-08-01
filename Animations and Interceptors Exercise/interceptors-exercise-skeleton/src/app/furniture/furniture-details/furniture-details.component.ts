import { Component, OnInit } from '@angular/core';
import { FurnitureModel } from '../models/furniture.model';
import { FurnitureService } from '../furniture.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  detailsModel: Observable<FurnitureModel>
  id: number

  constructor(private route: ActivatedRoute, private furnitureService: FurnitureService) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    console.log(this.id)
    this.detailsModel = this.furnitureService.getFurnitureDetails(this.id);
  }

}
