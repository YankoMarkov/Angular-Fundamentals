import { CategoryState } from "./category.state";
import * as CategoryActions from './category.actions';

const initialState: CategoryState = {
  category: null,
  all: [],
  moreByCategory: []
}

function getAllCategory(state, allCategory) {
  return {
    ...state,
    all: allCategory
  }
}

function moreByCategory(state, moreByCategory) {
  return {
    ...state,
    moreByCategory: moreByCategory
  }
}

function deleteCategory(state, deleteCategory) {
  if (deleteCategory.success) {
    const id = deleteCategory.id;
    const categoryIndex = state.all.findIndex(c => c.id === id);

    if (categoryIndex >= 0) {
      const categories = state.all.slice(0);
      categories.splice(categoryIndex, 1);
      return {
        ...state,
        all: categories
      }
    }
  }
  return state;
}

function createCategory(state, createCategory) {
  const categories = state.all.slice(0);
  categories.push(createCategory.category);
  return {
    ...state,
    all: categories
  }
}

function getCategory(state, getCategory) {
  return {
    ...state,
    category: getCategory
  }
}

export function categoryReducer(
  state: CategoryState = initialState,
  action: CategoryActions.Types
) {
  switch (action.type) {
    case CategoryActions.GET_CATEGORY:
      return getCategory(state, action.payload);
    case CategoryActions.CREATE_CATEGORY:
      return createCategory(state, action.payload);
    case CategoryActions.DELETE_CATEGORY:
      return deleteCategory(state, action.payload);
    case CategoryActions.MORE_BY_CATEGORY:
      return moreByCategory(state, action.payload);
    case CategoryActions.ALL_CATEGORY:
      return getAllCategory(state, action.payload);
    default:
      return state;
  }
}