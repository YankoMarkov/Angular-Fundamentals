import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FurnitureModel } from '../../../core/models/furniture/furniture.model';
import { FurnitureService } from '../../../core/services/furniture/furniture.service';
import { ActivatedRoute } from '@angular/router';

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
