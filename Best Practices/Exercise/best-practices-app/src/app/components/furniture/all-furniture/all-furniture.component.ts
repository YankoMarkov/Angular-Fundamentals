import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FurnitureModel } from '../../../core/models/furniture/furniture.model';
import { FurnitureService } from '../../../core/services/furniture/furniture.service';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furnituresModel: Observable<Array<FurnitureModel>>;
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(
    private furnitureService: FurnitureService,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.furnituresModel = this.furnitureService.getAllFurniture();
  }

  changePage(page) {
    this.currentPage = page;
  }

  deleteItem(id: number) {
    this.furnitureService.deleteFurniture(id)
      .subscribe(data => {
        this.router.navigate(['/home'])
        this.toastr.success('Furniture deleted', 'Warning!');
      })
  }
}
