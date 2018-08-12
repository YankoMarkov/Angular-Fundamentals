export interface FurnitureModel {
  id: number
  make: string,
  model: string,
  year: number,
  price: number,
  image: string,
  description: string,
  createdBy: string,
  material?: string
}