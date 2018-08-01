export class CreateFurnitureModel {
  constructor(
    public make: string,
    public model: string,
    public year: number,
    public price: number,
    public image: string,
    public description: string,
    public material?: string,
  ) { }
}