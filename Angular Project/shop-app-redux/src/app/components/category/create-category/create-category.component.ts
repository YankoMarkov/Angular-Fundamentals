import { Component, OnInit } from '@angular/core';
import { CreateCategoryModel } from '../../../core/models/category/create-category.model';
import { CategoryService } from '../../../core/services/category/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  categoryModel: CreateCategoryModel;

  constructor(private categoryService: CategoryService) {
    this.categoryModel = new CreateCategoryModel("");
  }

  create() {
    this.categoryService.createCategory(this.categoryModel)
      .subscribe();
  }

  ngOnInit() {
  }
}
