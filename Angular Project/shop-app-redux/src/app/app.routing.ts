import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/landing/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ProductsModule } from './components/products/products.module';
import { CategoriesModule } from './components/category/categories.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'category', loadChildren: () => CategoriesModule },
  { path: 'product', loadChildren: () => ProductsModule }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }