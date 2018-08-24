export interface ProductModel {
  id: number
  name: string,
  price: number,
  image: string,
  description: string,
  buyer: string,
  likes: Array<any>,
  reviews: Array<any>,
  category: number
}