import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../../core/guards/admin/admin.guard';
import { AuthGuard } from '../../core/guards/auth/auth.guard';
import { CreateProductComponent } from './create-product/create-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MyProductComponent } from './my-product/my-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { DeleteMyProductComponent } from './delete-my-product/delete-my-product.component';
import { SearchedProductsComponent } from './searched-products/searched-products.component';

const routes: Routes = [
  { path: "create", component: CreateProductComponent, canActivate: [AdminGuard] },
  { path: "all", component: AllProductsComponent },
  { path: "edit/:id", component: EditProductComponent, canActivate: [AdminGuard] },
  { path: "mine", component: MyProductComponent, canActivate: [AuthGuard] },
  { path: "delete/:id", component: DeleteProductComponent, canActivate: [AdminGuard] },
  { path: "deleteProduct/:id", component: DeleteMyProductComponent, canActivate: [AuthGuard] },
  { path: "details/:id", component: DetailsProductComponent, canActivate: [AuthGuard] },
  { path: "searchedProducts", component: SearchedProductsComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }