import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FurnitureService } from '../../../core/services/furniture/furniture.service';
import { FurnitureModel } from '../../../core/models/furniture/furniture.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {
  editModel: FurnitureModel;

  constructor(
    private route: ActivatedRoute,
    private editService: FurnitureService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.editService.getFurnitureById(this.route.snapshot.params["id"])
      .subscribe(data => this.editModel = data);
  }

  edit() {
    this.editService.editFurniture(this.editModel.id, this.editModel)
      .subscribe(data => {
        this.toastr.success('Updated furniture', 'Success!');
        this.router.navigate(['/furniture/all'])
      });
  }
}
