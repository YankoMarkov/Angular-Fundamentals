import { Action } from '@ngrx/store';
import { CategoryModel } from '../../core/models/category/category.model';
import { ProductModel } from '../../core/models/product/product.model';

export const ALL_CATEGORY = '[CATEGORY] AllCategory';
export const MORE_BY_CATEGORY = '[CATEGORY] MoreByCategory';
export const DELETE_CATEGORY = '[CATEGORY] DeleteCategory';
export const CREATE_CATEGORY = '[CATEGORY] CreateCategory';
export const GET_CATEGORY = '[CATEGORY] GetCategory';

export class AllCategoryAction implements Action {
  readonly type: string = ALL_CATEGORY;
  constructor(public payload: CategoryModel[]) { }
}

export class MoreByCategoryAction implements Action {
  readonly type: string = MORE_BY_CATEGORY;
  constructor(public payload: ProductModel[]) { }
}

export class DeleteCategoryAction implements Action {
  readonly type: string = DELETE_CATEGORY;
  constructor(public payload: object) { }
}

export class CreateCategoryAction implements Action {
  readonly type: string = CREATE_CATEGORY;
  constructor(public payload: CategoryModel) { }
}

export class GetCategoryAction implements Action {
  readonly type: string = GET_CATEGORY;
  constructor(public payload: CategoryModel) { }
}

export type Types = AllCategoryAction
  | MoreByCategoryAction
  | DeleteCategoryAction
  | CreateCategoryAction
  | GetCategoryAction;