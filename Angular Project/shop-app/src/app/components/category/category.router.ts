import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { AdminGuard } from '../../core/guards/admin/admin.guard';
import { AllCategoryComponent } from './all-category/all-category.component';
import { AuthGuard } from '../../core/guards/auth/auth.guard';
import { MoreByCategoryComponent } from './more-by-category/more-by-category.component';

const routes: Routes = [
  { path: "create", component: CreateCategoryComponent, canActivate: [AdminGuard] },
  { path: "all", component: AllCategoryComponent, canActivate: [AuthGuard] },
  {path: "more/:id", component: MoreByCategoryComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }