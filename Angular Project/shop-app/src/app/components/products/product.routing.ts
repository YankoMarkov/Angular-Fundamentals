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

const routes: Routes = [
  { path: "create", component: CreateProductComponent },
  { path: "all", component: AllProductsComponent },
  { path: "edit/:id", component: EditProductComponent },
  {path: "mine", component: MyProductComponent},
  {path: "delete/:id", component: DeleteProductComponent},
  {path: "details/:id", component: DetailsProductComponent},
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }